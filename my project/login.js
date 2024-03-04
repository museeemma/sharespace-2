document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve input values
    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var errorMsg = "";

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMsg += "Invalid email format. ";
    }

    // Validate password
    if (password.length < 8) {
        errorMsg += "Password must be at least 8 characters long. ";
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
        errorMsg += "Passwords do not match. ";
    }

    // Display error message if any
    var errorMessageElement = document.getElementById('error-msg');
    if (errorMsg !== "") {
        errorMessageElement.innerText = errorMsg;
    } else {
        errorMessageElement.innerText = "";
        
        // Redirect to another page upon successful submission
        window.location.href = "index.html"; // Replace with the desired URL
    }
});
