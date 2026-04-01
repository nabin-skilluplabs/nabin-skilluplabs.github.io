document
  .getElementById('submit_btn').addEventListener('click', function (event) {
    event.preventDefault();
    let fullNameIsValid = false;
    let emailIsValid = false;
    let passwordIsValid = false;
    let confirmPasswordIsValid = false;

    let fullName = document.getElementById('full_name');
    if (fullName.value.trim() === '') {
      document.getElementById('full_name_error').textContent = 'Full name is required.';
    }
    else {
      document.getElementById('full_name_error').textContent = '';
      fullNameIsValid = true;
    }

    let email = document.getElementById('email');
    if(email.value.trim() === '') {
      document.getElementById('email_error').textContent = 'Email is required.';
    }
    else if(email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null) {
      document.getElementById('email_error').textContent = 'Email is not valid.';
    }
    else {
      document.getElementById('email_error').textContent = '';  
      emailIsValid = true;  
    }

    let password = document.getElementById('password');
    if(password.value.trim() === '') {
      document.getElementById('password_error').textContent = 'Password is required.';
    }
    else if(password.value.length < 8) {
      document.getElementById('password_error').textContent = 'Password must be at least 8 characters.';
    }
    else {
      document.getElementById('password_error').textContent = ''; 
      passwordIsValid = true;   
    }

    let confirmPassword = document.getElementById('confirm_password');
    if(confirmPassword.value.trim() === '') {
      document.getElementById('confirm_password_error').textContent = 'Confirm password is required.';
    }
    else if(confirmPassword.value !== password.value) {
      document.getElementById('confirm_password_error').textContent = 'Passwords do not match.';
    }
    else {
      document.getElementById('confirm_password_error').textContent = ''; 
      confirmPasswordIsValid = true;   
    }

    if(fullNameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid) {
      alert('Form submitted successfully!');
    }
  });

// events list
// click
// mouseover
// mouseout
// keydown
// keyup
// change
// submit
// focus
// blur
