document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.querySelector("input[type='email']").value;
    alert("Thanks for subscribing with the email: " + email);
});