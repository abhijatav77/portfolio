import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tools: {
        type: [String],
        required: true,
    },
    projectImage: {
        public_id: {
            type: String,
        },
        url: {
            type: String
        }
    },
    github: {
        type: String,
        required: true
    },
    live: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Project = mongoose.model("Project", projectSchema)