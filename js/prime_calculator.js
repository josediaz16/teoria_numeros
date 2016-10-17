var primesFunctions = {

  findPrimes: function(min, max, chunks, ordered) {
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
    return this.processResult(primes, chunks, ordered);
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
