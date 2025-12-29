const commentRouter = require('express').Router();
require('dotenv').config();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

commentRouter.use(bodyParser.json());

// Configure your email transporter (using Gmail as an example)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

commentRouter.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    const to = 'deveshkumarpandeyiit+website@gmail.com';
    const subject = `New Comment from ${name}`;
    const text = `You have received a new comment from ${name} (${email}):\n\n${message}`;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Failed to send email', error });
    }
});
module.exports = commentRouter;