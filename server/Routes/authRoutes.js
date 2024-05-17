import express from 'express'
import {
  registerController,
  loginController,
  testController,
} from '../Controller/authController.js'
import { requireSignIn , adminSignIn} from '../Middleware/authMiddleware.js'

//router object
const router = express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController)

//LOGIN || POST
router.post('/login', loginController)

//test routes
router.get('/test', requireSignIn, adminSignIn, testController)

export default router
