const nodemailer = require('nodemailer');

class SendMail{
  constructor(){
    this.transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: `${process.env.NODEMAILER_EMAIL}`,
        pass: `${process.env.NODEMAILER_PASSWORD}`
      }
    });
  }

  async sendEmailForVarification(user){
    // here will be our link, this is for example
    const linkForVarification = `${process.env.DOMAIN_ADDRESS}/api/auth/verify/${user.verificationToken}`;

    return this.transport.sendMail({
      from: 'newEmail', 
      to: `${user.email}`,
      subject: 'nodemailer',
      html: `<p>Please open this <a href='${linkForVarification}'>link</a> and varify your email</p>`
    })
  }
}

exports.mailing = new SendMail();

