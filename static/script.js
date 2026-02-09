// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('hello-btn');
    const message = document.getElementById('hello-message');

    button.addEventListener('click', () => {
        fetch('/hello')          // Calls the /hello route in main.py
            .then(response => response.text())
            .then(text => {
                message.textContent = text;   // Shows response in paragraph
                message.style.color = '#4a00e0';
            })
            .catch(err => {
                message.textContent = "Oops! Something went wrong.";
                message.style.color = 'red';
            });
    });
});
