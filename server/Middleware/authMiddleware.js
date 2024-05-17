import JWT from 'jsonwebtoken'
import userModels from '../Models/userModels.js'

//protected routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(req.headers.authorization, process.env.SECRET_KEY) // encrypt
    req.user = decode  // DUSHWARI  // decrypt
    next()
  } catch (error) {
    console.log(error)
  }
}

// admin access

export const adminSignIn = async (req, res, next) => {
  try {
    const user = await userModels.findById(req.user._id)
    if (user.role === 0) {
      return res.status(401).send({
        success: false,
        message: 'UnAuthorized Access ',
      })
    } else {
      next()
    }
  } catch (error) {
    console.log(error)
    res.status(404).send({
        success:false,
        message:("error in admin access")
    })
  }
}
