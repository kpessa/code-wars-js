const F = n => (n === 0 ? 1 : n - M(F(n - 1)));
const M = n => (n === 0 ? 0 : n - F(M(n - 1)));

module.exports.F = F;
module.exports.M = M;
