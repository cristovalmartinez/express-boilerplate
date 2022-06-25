import { Router } from 'express'
import { welcomeApi } from './controller.js'

const router = Router()

router.route('/').get(welcomeApi)

export default router
