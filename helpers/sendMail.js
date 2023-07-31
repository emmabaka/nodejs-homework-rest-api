const nodemailer = require("nodemailer");

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "bakaemma@meta.ua",
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendMail = async ({ to, subject, html }) => {
  const emailOptions = {
    from: "bakaemma@meta.ua",
    to,
    subject,
    html,
  };

  await transporter.sendMail(emailOptions);
};

module.exports = sendMail;