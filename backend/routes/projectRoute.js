import express from 'express'
import { deleteProject, getProject, projectUpload, singleProject } from '../controller/projectController.js'
import { contact } from '../controller/contactController.js'
const router = express.Router()

router.post('/project-upload', projectUpload)
router.get('/all-projects', getProject)
router.get('/single-projects/:id', singleProject)
router.delete('/project-delete/:id', deleteProject)
router.post('/contact', contact)

export default router;