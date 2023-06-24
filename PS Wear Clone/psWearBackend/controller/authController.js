import userSchema from "../model/usersModel.js";
import {hashPassword} from "../helper/authHelper.js";
import { comparePassword } from "../helper/authHelper.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, phone } = req.body;

    if (!name) {
      return res.send({ message: "User name is required" });
    }
    if (!email) {
      return res.send({ message: "Email is required" });
    }
    if (!password) {
      return res.send({ message: "Password is required" });
    }
    if (!phone) {
      return res.send({ message: "Phone number is required" });
    }
    if (!address) {
      return res.send({ message: "Address is required" });
    }

    const existingUser = await userSchema.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: 'User already exists.',
      });
    }s
  
   const hashedpassword=await hashPassword(password);
    let user=await userSchema(
      {
        name,
        email,
        password: hashedpassword,
        address,
        phone
      }
    ).save();
     
    res.status(201).send(
      
      {  success: true,
      message: "User Registered successfully",
      user,
      }
    )
    // Rest of your registration logic...
  } catch (error) {
    return res.status(400).send(error);
  }
};
 const loginController=async(req,res)=>
{
  try {
    const {email,password}=req.body;
    if(!email || !password)
    {
      return res.send("invalid email address")
    }
    const user=await userSchema.findOne({email})
     const match=await comparePassword(password,user.password);
     if(!match)
     {
      res.send("password does not match")
     }
     if(match)
     {
      res.send("password matched")
     }
    
  } catch (error) {
    res.send(error); 
  }
}
export default loginController;
// http://localhost:8000/api/v1/auth/register