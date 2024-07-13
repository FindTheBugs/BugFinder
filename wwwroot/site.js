// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const errorButton = document.getElementById('errorButton');
    const errorModal = document.getElementById('errorModal');
    const closeButton = document.querySelector('.close-button');

    errorButton.addEventListener('click', function() {
        errorModal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        errorModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == errorModal) {
            errorModal.style.display = 'none';
        }
    });
});
