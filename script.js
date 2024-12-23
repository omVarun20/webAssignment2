$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        const email = $('#email').val();
        if (!email.includes('@')) {
            e.preventDefault();
            alert('Please enter a valid email.');
        }
    });
});
