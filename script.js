document.querySelector('.search-button').addEventListener('click', function() {
    var selectedUniversity = document.getElementById('university-select').value;
    // Logic to navigate or load the marketplace for the selected university
    console.log("Selected university: " + selectedUniversity); // Example action
    // You might redirect the user or fetch content based on the selection
});
function signin() {
    // Your sign-in logic here
    window.location.href = 'sign-in-page.html'; // Example redirection
}
function signup() {
    // Your sign-up logic here
    window.location.href = 'sign-up-page.html'; // Example redirection
}
document.querySelector('form').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if (!email || !password) {
        alert('Both email and password are required!');
        event.preventDefault(); // Prevent the form from submitting
    }
    // Further validation can be added here
});


const nodemailer = require('nodemailer');

// Configure your SMTP server details
let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'your-email@example.com', // your SMTP username
        pass: 'your-password' // your SMTP password
    }
});

// Email sending function
function sendVerificationEmail(userEmail, verificationLink) {
    const mailOptions = {
        from: '"Your Site Name" <your-email@example.com>', // sender address
        to: userEmail, // list of receivers
        subject: 'Please verify your email', // Subject line
        html: `<p>Thank you for signing up. Please <a href="${verificationLink}">click here</a> to verify your email address.</p>` // HTML body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}
