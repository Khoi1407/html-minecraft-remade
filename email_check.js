
function checkEmail() {
    // Get the input element
    var emailInput = document.getElementById("mail");
    var termsCheck = document.getElementById("terms");
  
    // Get the mail value
    var email = emailInput.value;
  
    // Check if mail contains "@gmail.com"
    if (email.indexOf("@gmail.com") !== -1) {
        if (termsCheck.checked) {
            // Checkbox is checked
            alert('Thank you for your subscribe!');
        } else {
            // Checkbox is not checked
            alert('Please agree to the our policy.');
        }
    } else {
      alert("Invalid email");
    }
}


