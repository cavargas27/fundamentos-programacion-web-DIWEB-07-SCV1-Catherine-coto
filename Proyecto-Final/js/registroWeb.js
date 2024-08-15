document.getElementById('registration-form').addEventListener('submit', function(event) {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const terms = document.getElementById('terms').checked;
    
    if (!fullName || !email || !password || !terms) {
        event.preventDefault(); 
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
    }
});
