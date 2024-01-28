const nodemailer = require("nodemailer");
exports.ConfigMail = () => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    auth: {
      user: "aggarwalsiddharth49@gmail.com",
      pass: "siulquowkodnmyjw",
    },
  });
  return transporter;
};
