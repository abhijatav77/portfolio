import { v2 as cloudinary } from 'cloudinary'
import { Project } from '../model/projectSchema.js'
import fs from 'fs'

export const projectUpload = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({
                success: false,
                message: "No image uploaded"
            })
        }
        const { projectImage } = req.files;
        console.log("projectImage", projectImage)
        const allowedFormat = ["image/jpeg", "image/png"]
        if (!allowedFormat.includes(projectImage.mimetype)) {
            return res.status(400).json({
                success: false,
                message: "Invalid format. Only jpg or png are allowed"
            })
        }
        console.log("allowedFormat", allowedFormat)
        if (projectImage.size > 2 * 1024 * 1024) {
            return res.status(400).json({
                success: false,
                message: "Image must be less than 2MB"
            })
        }
        const { title, description, tools, github, live } = req.body
        if (!title || !description || !tools || !github || !live) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const result = await cloudinary.uploader.upload(projectImage.tempFilePath,
            {
                folder: "mern_uploads",
                quality: "auto",
                fetch_format: "auto",
            }
        )
        console.log("result", result)
        if (!result || result.error) {
            return res.status(401).json({
                success: false,
                message: "Image upload failed"
            })
        }


        const newProject = await Project.create({
            title,
            description,
            tools: tools.split(","),
            projectImage: {
                public_id: result.public_id,
                url: result.secure_url
            },
            github,
            live,
        })
        console.log('newProject', newProject);
        return res.status(201).json({
            success: true,
            message: "Project uploaded successfully",
            newProject,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;

        let project = await Project.findById(id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found",
            });
        }

        const { title, description, tools, github, live } = req.body;

        const updatedData = {
            title,
            description,
            tools: tools ? tools.split(",") : project.tools,
            github,
            live,
        };

        if (req.files && req.files.projectImage) {
            const { projectImage } = req.files;

            const allowedFormat = ["image/jpeg", "image/png"];
            if (!allowedFormat.includes(projectImage.mimetype)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid format. Only jpg or png allowed",
                });
            }

            if (project.projectImage?.public_id) {
                await cloudinary.uploader.destroy(project.projectImage.public_id);
            }

            const result = await cloudinary.uploader.upload(
                projectImage.tempFilePath,
                {
                    folder: "mern_uploads",
                }
            );

            updatedData.projectImage = {
                public_id: result.public_id,
                url: result.secure_url,
            };
        }

        project = await Project.findByIdAndUpdate(id, updatedData, {
            new: true,
        });

        return res.status(200).json({
            success: true,
            message: "Project updated successfully",
            project,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getProject = async (req, res) => {
    try {
        const project = await Project.find()
        return res.status(200).json({
            project
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

export const singleProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findById(id)

        return res.status(200).json({
            success: true,
            project
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findByIdAndDelete(id, { new: true })

        return res.status(200).json({
            success: true,
            message: "Project deleted successfully",
            project
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}