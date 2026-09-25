document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const phone    = document.getElementById("phone").value.trim();
    const order    = document.getElementById("order").value;

    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const phoneError    = document.getElementById("phoneError");
    const orderError    = document.getElementById("orderError");

    usernameError.textContent = "";
    passwordError.textContent = "";
    phoneError.textContent    = "";
    orderError.textContent    = "";

    let isValid = true;

    const usernameRegex = /^\S+$/;
    if (!usernameRegex.test(username)) {
        usernameError.textContent = "Username must not be empty and must not contain spaces.";
        isValid = false;
    }

    const passwordRegex = /^(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters and contain at least one number.";
        isValid = false;
    }

    const phoneRegex = /^07\d{8}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = "Phone must be exactly 10 digits and start with 07.";
        isValid = false;
    }

    if (order === "") {
        orderError.textContent = "Please select an order.";
        isValid = false;
    }

    if (!isValid) return;

    localStorage.setItem("savedOrder", order);

    sessionStorage.setItem("savedUsername", username);

    const savedOrder    = localStorage.getItem("savedOrder");
    const savedUsername = sessionStorage.getItem("savedUsername");

    document.getElementById("result").style.display = "block";
    document.getElementById("welcomeMsg").textContent       = "Welcome, " + username;
    document.getElementById("savedOrderMsg").textContent    = "Saved Order: " + savedOrder;
    document.getElementById("savedUsernameMsg").textContent = "Saved Username: " + savedUsername;
});