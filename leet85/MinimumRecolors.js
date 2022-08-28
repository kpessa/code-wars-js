function minimumRecolors(blocks, k, s = blocks) {
  // write your code here
  function produceGroups() {
    let a = [];
    let count = 1;
    for (let i = 0; i < blocks.length; i++) {
      let block = blocks[i];
      let prevBlock = i === 0 ? 'W' : blocks[i - 1];
      if (block === 'W') {
        a[i] = 0;
        if (i !== 0 && prevBlock !== 'W') count++;
      } else if (block === 'B') {
        a[i] = count;
      }
    }
    return [a, count];
  }

  let [groups, maxCount] = produceGroups();

  let counts = [0]
  
  let count = 1;
  for (let i = 0; i < groups.length; i++){
    
    let group = groups[i]
    let prevGroup = (i===0) ? 0 : groups[i-1]
    
    if (group !== 0 && prevGroup === group) count++;
    else if (group)
  }

  console.log(groups, count);
}

minimumRecolors('WBWBBBW');

module.exports.minimumRecolors = minimumRecolors;
