let userName = prompt("(Enter your Name):");
let age = prompt("(Enter your Age):");
let gender = prompt("(male / female):");

let welcomeMessage = "";

if (gender === "male" || gender === "Male") {
    welcomeMessage = "Welcome Mr. " + userName;
} else if (gender === "female" || gender === "Female") {
    welcomeMessage = "Welcome Ms. " + userName;
} else {
    welcomeMessage = "Welcome " + userName;
}

alert(welcomeMessage);

let order = "";
let isAvailable = false;
let isValidOrder = false;
let orderPreparationMessage = "";
let orderStatus = "";

if (age < 16) {
    alert("You are not eligible to place an order");
    orderStatus = "(Under 16)";
} else {
    order = prompt("(Burger / Shawarma / Zinger)");

    if (order === "Burger" || order=="burger" || order === "Shawarma" || order=="shawarma"   || order === "Zinger" ||order=="shawarma") {
        isAvailable = true;
        isValidOrder = true;
    } else {
        isAvailable = false;
        isValidOrder = false;
    }

    if (isAvailable) {
        orderPreparationMessage = "Your order is being prepared";
    } else {
        orderPreparationMessage = "Invalid order. Please try again";
    }

    alert(orderPreparationMessage);

    if (age >= 18 && isValidOrder) {
        orderStatus = "Order confirmed";
    }

    if (age < 18 || !isValidOrder) {
        orderStatus = "Order requires verification";
    }

    alert("Order Status: " + orderStatus);
}

console.log("Customer Name: " + userName);
console.log("Age: " + age);
console.log("Gender: " + gender);
console.log("Order: " + (order ? order : "N/A"));
console.log("Order Status: " + orderStatus);


let statusClass = "status-warning";
if (orderStatus === "Order confirmed") {
    statusClass = "status-confirmed";
} else if (age < 16) {
    statusClass = "status-error";
}

document.write('<div class="card">');
document.write('  <h2>|شاورمجي</h2>');
document.write('  <div class="info-item"><span class="info-label"> </span><span class="info-value">' + userName + '</span></div>');
document.write('  <div class="info-item"><span class="info-label"> </span><span class="info-value">' + age + '</span></div>');
document.write('  <div class="info-item"><span class="info-label"> </span><span class="info-value">' + gender + '</span></div>');
document.write('  <div class="info-item"><span class="info-label"> </span><span class="info-value">' + (order ? order : "لا يوجد") + '</span></div>');
document.write('  <div class="status-badge ' + statusClass + '">' + orderStatus + '</div>');
document.write('</div>');