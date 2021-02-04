makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function (key, value) {
    // Calculate the hash (index)
    var hash = getHash(key, storageLimit);
    // Grab and initialize the storage slot
    storage[hash] = storage[hash] || [];
    var pairs = storage[hash];
    var pair;

    // Replace the pair, if it already exists
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
      }
    }
    // Add the pair, if it is new

    pairs.push([key, value]);
  };

  result.retrive = function (key) {
    // Calculate the hash (index)
    var hash = getHash(key, storageLimit);
    // Grab and initialize the storage slot
    storage[hash] = storage[hash] || [];
    var pairs = storage[hash];
    var pair;

    // Loop through the storage slot
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      // If the keys match, return its value
      if (pair[0] === key) {
        return pair[1];
      }
    }
    // Else return null
    return null;
  };

  result.remove = function (key) {
    // Calculate the hash (index)
    var hash = getHash(key, storageLimit);
    // Grab and initialize the storage slot
    storage[hash] = storage[hash] || [];
    var pairs = storage[hash];
    var pair;

    //Loop through the storage slot
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var removedPair = Pairs.splice(i, 1);

        // Return the value
        return removedPair[1];
      }
    }
    // Else return null
    return null;
  };
};
