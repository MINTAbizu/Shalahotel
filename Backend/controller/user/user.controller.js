import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../../models/user/user.model.js';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Register or Login controller
 export const REGISTER = async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {
        //  REGISTER 
        // if (req.path === '/register') {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }

            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = new User({ name, email, password: passwordHash, phone });
            await newUser.save();

            // Generate JWT token
            const token = jwt.sign({ id: newUser._id, email: newUser.email }, JWT_SECRET, { expiresIn: '1h' });

            return res.status(201).json({
                message: 'User registered successfully',
                token,
                user: { id: newUser._id, name: newUser.name, email: newUser.email }
            });
        // }

        // ===== LOGIN =====
       

        res.status(400).json({ message: 'Invalid route' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

export const Login = async (req, res) => {
    //  if (req.path === '/login') {
        try {
            const { email, password } = req.body;
        
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

            return res.status(200).json({
                message: 'Login successful',
                token,
                user: { id: user._id, name: user.name, email: user.email }
            });
        // }
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
            
        }
}
 

export const getuserinfo=async(req,res)=>{
    const {id}=req.params;
    try {
        const user=await User.findById(id).select('-password');
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json({user});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server error',error});
    }
};

export const getAllUsers=async(req,res)=>{
    try {
        const users=await User.find().select('-password');
        res.status(200).json({users});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server error',error});
    }
};

export const updateuserinfo=async(req,res)=>{
    const {id}=req.params;
    const {name,email,phone}=req.body;
    try {
        const user=await User.findByIdAndUpdate(id,{name,email,phone},{new:true}).select('-password');
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json({message:'User updated successfully',user});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server error',error});
    }
};

export const delateuserinfo=async(req,res)=>{
    const {id}=req.params;
    try {
        const user=await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json({message:'User deleted successfully'});
    }
        catch (error) {
        console.error(error);
        res.status(500).json({message:'Server error',error});
    }
};

export const changepassword=async(req,res)=>{
    const {id}=req.params;
    const {oldPassword,newPassword}=req.body;
    try {
        const user=await User.findById(id);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        const isPasswordValid=await bcrypt.compare(oldPassword,user.password);
        if(!isPasswordValid){
            return res.status(401).json({message:'Invalid old password'});
        }
        const newHashedPassword=await bcrypt.hash(newPassword,10);
        user.password=newHashedPassword;
        await user.save();
        res.status(200).json({message:'Password changed successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server error',error});
    }
};

// export default userController