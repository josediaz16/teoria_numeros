var app = new Vue({
  el: '#app',
  data: {
    minValue: null,
    maxValue: null,
    primeNumbers: [],
    error: false,
    ordered: true,
    message: ""
  },
  methods: {
    findPrimeNumbers: function() {
      this.error = false;
      if(this.validData()) {
        this.primeNumbers = primesFunctions.findPrimes(this.minValue, this.maxValue, 6, this.ordered);
      }
      else {
        this.error = true;
        this.message = "Verifica que ambos números sean mayores que 1 y que el valor minimo no sea mayor que el maximo";
      }
    },

    totalNumbers: function() {
      return this.primeNumbers.map(function(a){return a.length;}).reduce(function(a, b) { return a + b; }, 0);
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
