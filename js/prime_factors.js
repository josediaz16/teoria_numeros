var app = new Vue({
  el: '#prime_factors',
  data: {
    referenceNumber: null,
    primeFactors: [],
    error: false,
    message: ""
  },
  methods: {
    findPrimeFactors: function() {
      this.error = false;
      if(this.validData()) {
        this.primeFactors = primesFunctions.findPrimeFactors(this.referenceNumber);
      }
      else {
        this.error = true;
        this.message = "Verifica que el numero sea mayor que 1";
      }
    },

    primeFactorsInChunks: function(){
      return primesFunctions.sliceResult(this.primeFactors, 6);
    },

    numberOfDivisors: function() {
      return this.primeFactors.map(function(a){return a[1] + 1;}).reduce(function(a, b) { return a * b; });
    },

    totalOfDivisors: function() {
      return this.primeFactors.map(function(a){return a[0];}).reduce(function(a, b) { return a + b; }, 0);
    },

    shouldShowResult: function() {
      return !this.error && this.anyPrime();
    },

    anyPrime: function() {
      return this.primeFactors.length > 0
    },

    validData: function() {
      return this.referenceNumber > 1;
    }
  }
})
