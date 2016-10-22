var PrimesModule = function() {

  this.factors = [];
  this.primes = [];

  this.findPrimeNumbers = function(min, max, chunks, ordered) {
    primesInRange = this.findPrimesInRange(min, max);
    return processResult(primesInRange, chunks, ordered);
  };

  this.findPrimeFactors = function(number) {
    var i;
    this.factors = [];

    for (i = 2; i <= number; i++) {
      factor = [];
      while ((number % i) === 0) {
        factor.push(i);
        number /= i;
      }
      if(factor.length > 0) {
        this.factors.push([i, factor.length]);
      }
    }
    return this.factors;
  };

  this.findPrimesInRange = function(min, max) {
    this.primes = [];
    var isNotPrime = [];
    minValue = min === 1 ? min + 1 : min;
    for(var i = minValue; i <= max; ++i) {
      if(!isNotPrime[i]) {
        this.primes.push(i);
        for(var j = i; j <= max; j += i) {
          isNotPrime[j] = true;
        }
      }
    }
    return this.primes;
  };

  this.sigmaFunction = function() {
    return this.factors.map(function(factor){ return applySigmaFormula(factor[0], factor[1]); }).reduce(function(a, b) { return a * b; });
  };

  this.taoFunction = function() {
    return this.factors.map(function(factor){return factor[1] + 1;}).reduce(function(a, b) { return a * b; });
  };

  this.phiFunction = function(number) {
    return parseInt(number * this.factors.map(function(factor){ return 1 - (1/factor[0]);}).reduce(function(a, b) { return a * b; }));
  };

  this.totalPrimes = function() {
    return this.primes.length;
  };

  this.inChunks = function(chunks) {
    return sliceResult(this.factors, chunks);
  };

  //private

  applySigmaFormula = function(base, potency) {
    return (Math.pow(base, potency + 1) - 1)/(base - 1);
  };

  sliceResult = function(array, chunks) {
    var groups = [], i;
    for (i = 0; i < array.length; i += chunks) {
        groups.push(array.slice(i, i + chunks));
    }
    return groups;
  };

  processResult = function(primes, chunks, ordered) {
    if(!ordered){
      primes.reverse();
    }
    if(chunks != null){
      return this.sliceResult(primes, chunks);
    }
    else {
      return primes;
    }
  };
}
