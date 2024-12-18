const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config(); 

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, 
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD, 
    },
});

// Email sending function
const sendEmail = expressAsyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(name, email, subject, message);

    const mailOptions = {
        from: email, // sender's email
        to: process.env.TO_EMAIL,
        subject: subject, 
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
        res.status(200).send({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error("Failed to send email:", error);
        res.status(500).send({ message: 'Failed to send email.' });
    }
});

module.exports = { sendEmail };
