var primesFunctions = {

  findPrimeNumbers: function(min, max, chunks, ordered) {
    primesInRange = this.findPrimesInRange(min, max);
    return this.processResult(primesInRange, chunks, ordered);
  },

  findPrimeFactors: function(number) {
    var factors = [], i;

    for (i = 2; i <= number; i++) {
      factor = [];
      while ((number % i) === 0) {
        factor.push(i);
        number /= i;
      }
      if(factor.length > 0) {
        factors.push([i, factor.length]);
      }
    }

    return factors;
  },

  findPrimesInRange: function(min, max) {
    var primes = [];
    var isNotPrime = [];
    minValue = min === 1 ? min + 1 : min;
    for(var i = minValue; i <= max; ++i) {
      if(!isNotPrime[i]) {
        primes.push(i);
        for(var j = i; j <= max; j += i) {
          isNotPrime[j] = true;
        }
      }
    }
    return primes;
  },

  processResult: function(primes, chunks, ordered) {
    if(!ordered){
      primes.reverse();
    }
    if(chunks != null){
      return this.sliceResult(primes, chunks);
    }
    else {
      return primes;
    }
  },

  sliceResult: function(array, chunks) {
    var groups = [], i;
    for (i = 0; i < array.length; i += chunks) {
        groups.push(array.slice(i, i + chunks));
    }
    return groups;
  }
}
