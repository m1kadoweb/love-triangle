/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;
  var lover1 = 0;
  var lover2 = 0;
  var lover3 = 0;

  for(var i = 0; i < preferences.length; i++) {
  		lover1 = preferences[i];
  		lover2 = preferences[lover1-1];
  		lover3 = preferences[lover2-1];
  		if(lover3 == i + 1)
  			counter++;

}
  		return Math.floor(counter/3);
};

