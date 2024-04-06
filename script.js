document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the form from submitting in the traditional way
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Form Submitted!', { name, email, message });
    alert('Thank you for your message!');

    // Here, you could add AJAX to send the form data to a server without reloading the page
});