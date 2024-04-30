// server.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint để xử lý yêu cầu quên mật khẩu và gửi email mới
app.post('/forgot', (req, res) => {
  const { email } = req.body;
  
  // Generate a new password
  const newPassword = generateRandomPassword();

  // Send email with the new password
  sendEmailWithNewPassword(email, newPassword)
    .then(() => {
      res.status(200).json({ message: 'New password sent to your email.' });
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred. Please try again later.' });
    });
});

// Function to send email with the new password
function sendEmailWithNewPassword(email, newPassword) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_email_password'
    }
  });

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: email,
    subject: 'Forgot Password Request',
    text: `Your new password is: ${newPassword}`
  };

  return transporter.sendMail(mailOptions);
}

// Function to generate a random password
function generateRandomPassword() {
  // Logic to generate a random password
  return 'randompassword123'; // For illustration purpose
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
