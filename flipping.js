function flipBooleans(bools) {
    const flippedArray = [];
    for(let i=0;i < bools.length; i++){
        flippedArray.push(!bools[i]);
    }
    return flippedArray
}
