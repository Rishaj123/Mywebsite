document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out, Trishaj! This is a demo; set up a backend to receive real emails.');
    this.reset();
});