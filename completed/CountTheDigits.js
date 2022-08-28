function range(n) {
  return Array(n)
    .fill()
    .map((d, i) => i);
}

function nbDig(n, digit) {
  return (
    range(n + 1)
      .map(d => d ** 2)
      .join('')
      .split(digit).length - 1
  );
}

module.exports.nbDig = nbDig;
