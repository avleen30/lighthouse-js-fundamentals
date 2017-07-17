function merge (arr1,arr2){
  var arr = [];
  var i = 0;
  var j = 0;

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
      arr.push(arr1[i]);
      if(i < arr1.length){
        i++;
      }
    }
    else{
      arr.push(arr2[j]);
      if(j < arr2.length){
        j++;
      }
    }
  }

  while(i < arr1.length){
    arr.push(arr1[i]);
    i++;
  }

  while(j < arr2.length){
    arr.push(arr2[j]);
    j++;
  }

  return(arr);
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);