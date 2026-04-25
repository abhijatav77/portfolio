import express from 'express'
import { getMe, login, logout, register } from '../controller/adminController.js'
import { isAuthenticated } from '../controller/middleware/adminMiddleware.js'
const adminRouter = express.Router()

adminRouter.post("/register", register)
adminRouter.post("/login", login)
adminRouter.get("/logout", isAuthenticated, logout)
adminRouter.get("/my-profile", isAuthenticated, getMe)

export default adminRouter