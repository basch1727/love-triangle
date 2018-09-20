/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var spc =0;
  for (var a=0, lenght =preferences.length; a < lenght;  a++) {
    var spc1=preferences[preferences[preferences[a]-1]-1]=== a+1;
    var spc2=a+1 !==preferences[a];

    if (spc1 && spc2){
     
        spc++;
    }
    }
    return spc /3;
  };



