// What is class?

// function name(params) {
  
// }
class Animals{
    constructor(name,age){
          this.name = name;
          this.age = age;

    }
    calculateAge(calc){
      return (new Date().getFullYear() - calc);
    }

    calculateAge1( ){
      return (new Date().getFullYear() -  this.age);
    }

}



class Plant extends Animals{
    growUp(treename){
      return `My new tree name ${treename}`
    }
}


const infoAnimals = new Animals("Leon", 2010);
console.log(infoAnimals.name);
console.log(infoAnimals.calculateAge1());
// console.log(new Date().toLocaleDateString());


const infoPlant = new Plant();

console.log(infoPlant.growUp("Palid"));
console.log(infoPlant.calculateAge(2000));



