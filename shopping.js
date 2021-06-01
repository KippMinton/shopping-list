let groceries = [
    {
        id: 1,
        name: "kale",
        price: 2.50
    },
    {
        id: 2,
        name: "garlic",
        price: 0.89
    },
    {
        id: 3,
        name: "apples",
        price: 1.30
    },
    {
        id: 4,
        name: "black beans",
        price: 0.99
    },
    {
        id: 5,
        name: "potatoes",
        price: 1.59
    },
    {
        id: 6,
        name: "ground beef",
        price: 5.99
    }
]

const addToShoppingList = (groceryObj, arr) => {
   let arrLength = arr.length;
   if (arrLength === 0){
      groceryObj.id = 1;
   } else {
      let lastID = arr[arrLength - 1].id;
      groceryObj.id = lastID + 1;
   }
   groceryObj.dateCreated = new Date().toLocaleDateString("en-US").split("/") + "," + new Date().toLocaleTimeString("en-US").split(/:| /)
   arr.push(groceryObj);
}

let sprouts = {
   name: "Brussels sprouts", 
   price: 4.00
}

let water5 = {
   name: "water: 5gal",
   price: 5.00
}

let tamales = {
   name: "frozen tamales",
   price: "7.00"
}

let catFood = {
   name: "dry cat food",
   price: 12.00
}

let chickenBreast = {
   name: "chicken breast",
   price: "4.99"
}

addToShoppingList(sprouts, groceries)
addToShoppingList(water5, groceries)
addToShoppingList(tamales, groceries)
addToShoppingList(catFood, groceries)
addToShoppingList(chickenBreast, groceries)

console.log(groceries)