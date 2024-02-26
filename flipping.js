function flipBooleans(bools) {
    let flippedArray = [];
bools.forEach(bool=>{
  flippedArray.push(!bool);
});
return flippedArray;
}