// Store user data in a simple array for demonstration purposes
// In a real-world scenario, you should use a secure database and hashing for passwords
var users = [];

// Function to register a new user
function registerUser(email, password, first_name, last_name, gender) {
  // Check if the email is already in use
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert('Email already in use');
      return;
    }
  }
  // Add the new user to the array
  users.push({
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    gender: gender
  });
  alert('Registration successful!');
  window.location.href = 'signin.html';
}

// Function to authenticate a user
function authenticateUser(email, password) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      // User is authenticated, set a session variable
      sessionStorage.setItem('authenticated', true);
      window.location.href = 'index.html';
      return;
    }
  }
  alert('Invalid credentials');
}

// Check if the user is authenticated before allowing access to index.html
function checkAuthentication() {
  if (!sessionStorage.getItem('authenticated')) {
    window.location.href = 'signin.html';
  }
}

// Link the functions to the forms
$(document).ready(function() {
  $('#signup-form').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var gender = $('#gender').val();
    registerUser(email, password, first_name, last_name, gender);
  });

  $('#signin-form').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    authenticateUser(email, password);
  });
});

