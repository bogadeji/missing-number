
module.exports = {
findMissing:function(arr1, arr2){
  
	function checkArray(val) { return arr1.indexOf(val) >= 0;}
	difference = arr1.filter(x => arr2.indexOf(x) == -1).concat(arr2.filter(x => arr1.indexOf(x) == -1));
	for(var i = 0; i <= arr2.length; ++i) {
		var missing = arr2.every(checkArray) ? 0 : difference[i];
 	return missing;
}
}
}