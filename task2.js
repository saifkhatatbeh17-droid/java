let menu = [
  { name: "Pizza", price: 5, category: "Main", available: true },
  { name: "Burger", price: 4, category: "Main", available: true },
  { name: "Pasta", price: 6, category: "Main", available: false },
  { name: "Salad", price: 3, category: "Starter", available: true },
  { name: "IceCream", price: 2, category: "Dessert", available: true }
];

function showMenu() {
  for (let i = 0; i < menu.length; i++) {
    document.write(menu[i].name + " - " + menu[i].price + " JD - " + menu[i].category + "<br>");
  }
}

function findFood(foodName) {
  let found = null;
  for (let i in menu) {
    if (!menu[i].available) {
      continue;
    }
    if (menu[i].name.toLowerCase() === foodName.toLowerCase()) {
      found = menu[i];
      break;
    }
  }
  return found;
}
function displayOrder(food, quantity) {
  document.write("<h3>Your Order:</h3>");
  for (let key in food) {
    document.write(key + ": " + food[key] + "<br>");
  }
  document.write("Quantity: " + quantity + "<br>");
  document.write("Total Price: " + (food.price * quantity) + " JD");
}

showMenu();

let selectedFood = null;

while (!selectedFood) {
  let input = prompt("Enter a food name:");
  selectedFood = findFood(input);
  if (!selectedFood) {
    alert("Food not available, try again.");
  }
}

let quantity = Number(prompt("Enter quantity:"));
displayOrder(selectedFood, quantity);
