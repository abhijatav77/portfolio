import { Admin } from "../model/adminSchema.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email or password is required"
            })
        }
        const existAdmin = await Admin.findOne({ email })
        if (existAdmin) {
            return res.status(404).json({
                success: false,
                message: "Admin already registered"
            })
        }
        const hashPass = await bcrypt.hash(password, 10)
        const newAdmin = await Admin.create({
            email,
            password: hashPass
        })

        return res.status(200).json({
            success: true,
            message: "Admin registered successfully",
            newAdmin
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email or password is required"
            })
        }
        const admin = await Admin.findOne({ email })
        if (!admin) {
            return res.status(404).json({
                success: false,
                message: "Invalid credentials"
            })
        }
        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign({ id: admin._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            path: "/"
        })

        return res.status(200).json({
            success: true,
            message: "Admin login successfully",
            admin,
            token
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/",
            expires: new Date(0)
        })

        return res.status(200).json({
            success: true,
            message: "Admin logout successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await Admin.findById(req.user.id)
        return res.status(200).json({
            success: true,
            data: {
                email: user.email,
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}