import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup= async(req,res)=>{

    const{username,email,password}=req.body;

     // Hashing the password
     const hashPassword= bcryptjs.hashSync(password,10);

    if(!username || !email || !password || username==='' || email==='' || password===''){
        return res.status(400).json({message:"All fields are required"})
    }

    const newUser=new User({
        username,
        email,
        password:hashPassword
    });

   

    try {
        await  newUser.save();
        res.json('signup successfull')
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}