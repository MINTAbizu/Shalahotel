import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../../models/user/user.model.js';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Register or Login controller
export const userController = async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {
        //  REGISTER 
        if (req.path === '/register') {
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
        }

        // ===== LOGIN =====
        if (req.path === '/login') {
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
        }

        res.status(400).json({ message: 'Invalid route' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};
