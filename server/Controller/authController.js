import userModel from '..//Models/userModels.js'
import { comparePassword, hashPassword } from './../Helpers/authHelpers.js'
import JWT from 'jsonwebtoken'

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body
    //validations

    //check user
    const exisitingUser = await userModel.findOne({ email })
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: true,
        message: 'Already Register please login',
      })
    }
    //register user
    const hashedPassword = await hashPassword(password)
    //save
    const users = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save()

    res.status(201).send({
      success: true,
      message: 'User Register Successfully',
      users,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in Registeration',
      error,
    })
  }
}

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: 'Invalid credential',
      })
    }

    const user = await userModel.findOne({ email })
    if(!user){
      return res.status(404).send({
        success:false,
        message:"user not found please register"
      })
    }

    const matchpass = await comparePassword(password, user.password)

    if(!matchpass){
      return res.status(200).send({
        success:false,
        message:"invalid Credentials"
      })
    }

    const token = await JWT.sign({_id:user._id},process.env.SECRET_KEY,{expiresIn:"7d"});

    return res.status(200).send({

      success:true,
      message:"Succesfully login",
      user:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address
      },
      token
    
    })


  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in login',
      error,
    })
  }
}


export const testController = async (req,res) => {
  try {
    res.send('protected Route ')
  } catch (error) {
    res.send({error})
  }
}