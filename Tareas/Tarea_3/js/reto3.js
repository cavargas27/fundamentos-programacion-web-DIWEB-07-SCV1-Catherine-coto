document.getElementById('navigateButton').addEventListener('click', function() {
    const selectedURL = document.getElementById('urlSelect').value;
    if (selectedURL) {
        window.location.href = selectedURL;
    } else {
        alert('Por favor, selecciona una URL.');
    }
});
