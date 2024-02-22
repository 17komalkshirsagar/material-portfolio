const Test = require("../model/Test")
const sendEmail = require("../utils/email")

exports.register = async (req, res) => {
    console.log(req.body)
    try {
        const x = await sendEmail({
            to: req.body.to,
            message: req.body.message,
            subject: req.body.subject,
        })
        if (x) {

            res.status(200).json({ message: "email send success" })

        } else {
            res.status(400).json({ message: "unable to send email" })

        }
        await Test.create(req.body)
    } catch (error) {
        res.status(500).json({ message: error.message || "something went wrong" })
    }
}