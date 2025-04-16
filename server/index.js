import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import jwt from 'jsonwebtoken';
import Login from './schemas/login.js';


dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
const mongo_url = 'mongodb://localhost:27017/userManagement';

// mongoose.connect(mongo_url);
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('Database connection error:', err));
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});
function authenticateToken(req, res, next) {
    const token = req.headers[authorization];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, 'zxcvbnm', (err,user) => {
        if (err) return res.sendStatus(401);
        req.user = user;
        next();
    });
};

app.get

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Login.findOne({ username });
        
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid password' });
        }else{
            const token = jwt.sign({ username: user.username }, 'zxcvbnm', { expiresIn: '30s' });
            res.status(200).json({ message: 'Login successful', token });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login.' });
    }
});
app.post('/register', async (req, res) => {
    try {
        const { username, password, email, phone_number }= req.body;
        const newTest = new Login({ username, password, email, phone_number });
        await newTest.save();
        res.status(201).json({ message: 'User registered successfully', user: newTest });
    } catch (error) {
        console.error('Error during registration:', error);
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Duplicate entry detected. Please use unique values.' });
        }
        res.status(500).json({ error: 'An error occurred during registration.' });
    }
});

