function garbageCollection(garbage, travel) {
  // write your code here
  let sum = 0;
  for (let g of ['P', 'G', 'M']) {
    let j = 0;
    for (let i = 0; i < garbage.length; i++) {
      let time = 0;
      if (new RegExp(g).test(garbage[i])) {
        console.log(
          `Garbage Type: ${g}, i:${i}, garbage: ${garbage}, travel: ${travel}`
        );
        if (i !== 0)
          while (j < i) {
            time += travel[j];
            j++;
          }
        let count = garbage[i].split(g).length - 1;
        time += count;
      }
      console.log(time);
      sum += time;
    }
  }
  return sum;
}

module.exports.garbageCollection = garbageCollection;
