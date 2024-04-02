import express from 'express'
import experienceController from '../controller/experiencesController.js'

const router = express.Router()

router.get('/myExperience',experienceController.index)