import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Please enter at least 3 characters"],
        maxlength: [15, "Please enter all most 15 characters"]
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
        minlength: [3, "Please enter at least 3 characters"],
        maxlength: [15, "Please enter all most 15 characters"]
    },
    messages: {
        type: String,
        required: true,        
        minlength: [3, "Please enter at least 3 characters"],
        maxlength: [100, "Please enter all most 100 characters"]
    },
},{timestamps: true})

export const Contact = mongoose.model("Contact", contactSchema)