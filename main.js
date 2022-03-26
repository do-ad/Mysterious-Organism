// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, bases) => {
  return {
    specimenNum: num,
    dna: bases,
    mutate() {
      const dnaBases = ['A', 'T', 'C', 'G'];
      const location = Math.floor(Math.random() * 15);
      const base = this.dna[location];
      const indexOfBase = dnaBases.findIndex(element => element === base);
      if (indexOfBase !== 3) {
        this.dna[location] = dnaBases[indexOfBase + 1];
        //console.log(`Changing base ${base} at index ${location + 1} to ${dnaBases[indexOfBase+1]}`);
      }  else { 
        this.dna[location] = dnaBases[0];
        //console.log(`Changing base ${base} at index ${location + 1} to ${dnaBases[0]}`);
      }
      return this.dna;
    },
    compareDNA(pila) {
      console.log(`Specimen ${this.specimenNum} = ${this.dna}`);
      console.log(`Specimen ${pila.specimenNum} = ${pila.dna}`);
      let identical = 0;
      for (let i = 0; i < pila.dna.length; i++) {
        //console.log(this.dna[i] + pila.dna[i]);
        if (this.dna[i] === pila.dna[i]) identical++;
      }
      console.log(`specimen #1 and specimen #2 have ${identical} identical bases or ` + (identical/this.dna.length * 100).toFixed(2) + '% DNA in common.');
    }
  }
}

const test = pAequorFactory(1, mockUpStrand());
console.log(test);
test.compareDNA(pAequorFactory (99, mockUpStrand()));

// test.mutate();
// console.log(test);
//console.log(test.specimenNum + ' ' + test.dna);






