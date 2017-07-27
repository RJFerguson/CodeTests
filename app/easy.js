var exports = module.exports={};

exports.convertNum = function(num){
  return num.toString()
}


exports.sum = function(a,b){
  return a + b; 
};

exports.average = function(arr){
  return (arr.reduce((total, num)=> total + num, 0) / arr.length)
}

exports.middleNum = function(arr){
  // var newArr = arr.concat().sort((a, b) => a-b)
  var newArr = arr.concat().sort(function(a, b){return a-b})
  
  return arr.indexOf(newArr[1])
}

exports.stray = function(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}
