function DNAtoRNA(dna) {
	return dna.replace(/T/g, 'U');
}

module.exports.DNAtoRNA = DNAtoRNA;
