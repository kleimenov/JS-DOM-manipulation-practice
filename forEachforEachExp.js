let array = [[1,2,3,4], [5,6,7], [8,9,0]];

array.forEach(function(innerArray){
    console.log(innerArray);
    innerArray.forEach(function(insideInnerArray){
        console.log(insideInnerArray);
    });
})