function equalRC(g) {
  let rows = g.map(r => r.join(','));

  let cols = [];
  for (let c = 0; c < g[0].length; c++) {
    let col = [];
    for (let r = 0; r < g.length; r++) {
      col.push(g[r][c]);
    }
    cols.push(col.join(','));
  }

  let count = 0;
  for (let row of rows) {
    for (let col of cols) {
      if (row === col) count++;
    }
  }
  return count;
}

module.exports.equalRC = equalRC;
