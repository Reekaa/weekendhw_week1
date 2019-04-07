myFunctions = {

  getName: (petShop) => {
    return petShop.name;
  },

  getTotalCash: (petShop) => {
    return petShop.admin.totalCash;
  },

  addOrRemoveCash: (inputedPetshop, num) => {
    inputedPetshop.admin.totalCash += num;
  },

  getPetsSold: (soldPets) => {
    return soldPets.admin.petsSold;
  },

  increasePetsSold: (inputedPetshop, num) => {
    inputedPetshop.admin.petsSold += num;
  },

  getStockCount: (inputedPetshop) => {
    return inputedPetshop.pets.length;
  },

  getPetsByBreed: (inputedPetshop, breed) => {
    var breedAmount = 0;

    for (let pet of inputedPetshop.pets) {
     if (pet.breed === breed){
       breedAmount++
     }
    }
    return breedAmount;
  },

  getPetByName: (inputedPetshop, name) => {
    for (let p of inputedPetshop.pets) {
      if (p.name === name){
        return p;
      }
    }
  },

  removePetByName: (inputedPetshop, name) => {
   for (var i = inputedPetshop.pets.length-1; i >= 0; i--){
     if(inputedPetshop.pets[i].name === name){
       inputedPetshop.pets.splice(i, 1);
     }
   }
  },

  addPetToStock: (inputedPetshop, newP) => {
    inputedPetshop.pets.push(newP);
    return inputedPetshop.length;
  },

  getCustomersCash: (customerObject) => {
    return customerObject.cash;
  },

  getCustomersCashTotal: (customerObject) => {
    var total = 0;
    for (cust of customerObject) {
      total += cust.cash;
    }
    return total;
  },

  removeCustomerCash: (customerObject, num) => {
    customerObject.cash -= num;
  },

  getCustomerPetCount: (customerObject, pets) => {
    var pets = 0;
    for (let customers of customerObject.pets) {
      pets++
    }
    return pets;
  },

  addPetToCustomer: (customerObject, newPet) => {
    customerObject.pets.push(newPet);
  },

  customerCanAffordPet: (customerObject, newPetObject) => {
    if (customerObject.cash >= newPetObject.price) {
      return true;
    }else {
      return false;
    }
  },

  sellPetToCustomer(shop, pet, customer) {
    if(!pet) return;
    if(!myFunctions.customerCanAffordPet(customer, pet)) return;

    myFunctions.addPetToCustomer(customer, pet);
    myFunctions.addOrRemoveCash(shop, pet.price);
    myFunctions.removeCustomerCash(customer, pet.price);
    myFunctions.removePetByName(shop, pet.name);
    myFunctions.increasePetsSold(shop, 1);
  }

}
module.exports = myFunctions;
