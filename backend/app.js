const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_MAIL, // generated ethereal user
        pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log(name, email, subject, message);

    var mailOptions = {
        from: email,
        to: process.env.SMTP_MAIL,
        subject: subject,
        html: `Name: ${name}<br>
        Email: ${email}<br>
        Subject: ${subject}<br>
        Message: ${message}<br>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
            res.status(500).send({ message: 'Failed to send email.' });
        } else {
            console.log("Email sent successfully!");
            res.status(200).send({ message: 'Email sent successfully!' });
        }
    });
});

module.exports = { sendEmail };