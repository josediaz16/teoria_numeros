var app = new Vue({
  el: '#prime_factors',
  data: {
    referenceNumber: null,
    primeFactors: [],
    error: false,
    message: "",
    primesModule: new PrimesModule()
  },
  methods: {
    findPrimeFactors: function() {
      this.error = false;
      if(this.validData()) {
        this.primeFactors = this.primesModule.findPrimeFactors(this.referenceNumber);
      }
      else {
        this.error = true;
        this.message = "Verifica que el numero sea mayor que 1";
      }
    },

    primeFactorsInChunks: function(){
      return this.primesModule.inChunks(6);
    },

    numberOfDivisors: function() {
      return this.primesModule.taoFunction();
    },

    totalOfDivisors: function() {
      return this.primesModule.sigmaFunction();
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
