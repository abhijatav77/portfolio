import { Contact } from "../model/contactSchema.js";
import validator from 'validator'

export const contact = async(req, res) => {
    try {
        const {name, email, subject, messages} = req.body;
        if(!name || !email || !subject || !messages){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({
                success: false,
                message: "Please enter the valid email"
            })
        }

        const newContact = await Contact.create({
            name,
            email,
            subject,
            messages
        })

        return res.status(200).json({
            success: true,
            message: "Message sent successfully",
            newContact
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}