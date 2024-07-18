document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Optionally, you can perform additional validation here
    
    // Redirect to main.html
    window.location.href = 'main.html';
});
