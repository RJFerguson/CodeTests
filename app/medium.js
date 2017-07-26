var exports = module.exports={};

exports.addBinary = function(a,b){
  var check = (a + b).toString(2)
  return check
};

exports.missingArray = function(arrayOfArrays){
  var check = [] 
  var missingNum = 0; 
  var nullCheck;
  if(arrayOfArrays === null || arrayOfArrays.length <= 0){
    return 0
  } 
  arrayOfArrays.forEach(function(item){
    if (item === null){
     nullCheck = 0; 
    } 
  })
  if (nullCheck === 0){
    return nullCheck
  }
  arrayOfArrays.forEach(function(item){
    check.push(item.length)
  })
  check.sort(function(a,b) {return a-b})
 
  if( check[0] === 0){
    return 0 
  }else {
    for(let i = check[check.length-1]; i > check[0]; i-- ){
    if (check.indexOf(i) === -1){
      missingNum = i 
    }
  }
  }
  if (nullCheck === 0){
    return nullCheck
  }
  else {
    return missingNum
  }
  }
