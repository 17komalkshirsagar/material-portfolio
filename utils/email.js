const nodemailer = require("nodemailer")

const fn = ({
    to = process.env.FROM_EMAIL,
    message = "test email",
    subject = "test subject" }) => {
    try {
        const mailer = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.FROM_EMAIL,
                pass: process.env.EMAIL_PASS,
            },
        })
        mailer.sendMail(
            {
                to,
                subject,
                text: message,
                from: process.env.FROM_EMAIL,
            },
            (err) => {
                if (err) {
                    console.log(err);
                    return true
                } else {
                    console.log("email send successful")
                }
            })
    } catch (error) {
        console.log(error)
        return false
    }
}
const sendEmail = ({
    to = process.env.FROM_EMAIL,
    message = "test email",
    subject = "test subject" }) => new Promise((resolve, reject) => {
        try {
            const mailer = nodemailer.createTransport({  //object return krt
                service: "gmail",
                auth: {
                    user: process.env.FROM_EMAIL,
                    pass: process.env.EMAIL_PASS,
                },
            })
            mailer.sendMail(
                {
                    to,
                    subject,
                    text: message,
                    from: process.env.FROM_EMAIL,
                },
                (err) => {
                    if (err) {
                        console.log(err);
                        return reject(err)
                    } else {
                        console.log("email send successful")
                        return resolve("email sed success")
                    }
                })
        } catch (error) {
            console.log(error)
            return reject(error.message)
        }
    })
module.exports = sendEmail