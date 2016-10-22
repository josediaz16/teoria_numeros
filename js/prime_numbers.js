var app = new Vue({
  el: '#app',
  data: {
    minValue: null,
    maxValue: null,
    primeNumbers: [],
    error: false,
    ordered: true,
    message: "",
    primesModule: new PrimesModule()
  },
  methods: {
    findPrimeNumbers: function() {
      this.error = false;
      if(this.validData()) {
        this.primeNumbers = this.primesModule.findPrimeNumbers(this.minValue, this.maxValue, 6, this.ordered);
      }
      else {
        this.error = true;
        this.message = "Verifica que ambos números sean mayores que 1 y que el valor minimo no sea mayor que el maximo";
      }
    },

    totalPrimes: function() {
      return this.primesModule.totalPrimes();
    },

    shouldShowResult: function() {
      return !this.error && this.anyPrime();
    },

    anyPrime: function() {
      return this.primeNumbers.length > 0
    },

    validData: function() {
      return (this.minValue <= this.maxValue) && this.maxValue >= 2;
    }
  }
})
