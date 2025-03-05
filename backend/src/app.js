import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Question from './models/question.model.js';
import Quiz from './models/quiz.model.js';
import Result from './models/results.model.js';
import User from './models/users.models.js';
import Admin from "./models/admin.models.js"
const app=express();
dotenv.config();

let port = process.env.PORT || 8080;

// MongoDB Connection (Ensure MONGO_URI is in your .env file)
mongoose.connect(process.env.MONGO_URL, {

})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// User Routes
app.post('/users/signup', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/users/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).send({ error: 'Invalid credentials' });
        }
        res.send({ message: 'Sign-in successful' });
    } catch (error) {
        res.status(500).send(error);
    }
});

//admin routes
app.post('/admin/signup', async (req, res) => {
    const admin = new Admin(req.body);
    try {
        await admin.save();
        res.status(201).send(admin);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/admin/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin || admin.password !== password) {
            return res.status(401).send({ error: 'Invalid credentials' });
        }
        res.send({ message: 'Sign-in successful' });
    } catch (error) {
        res.status(500).send(error);
    }
});

//app listening
app.listen(port,()=>{
    console.log(`app listening to port ${port}`);
});

