import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import { chats } from './data/data.js'
import { connectDB } from './config/db.js';

const app = express();
dotenv.config();

connectDB();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("app is running");
})

app.get("/api/chats", (req, res) => {
    res.send(chats);
})

app.get("/api/chats/:id", (req, res) => {
    const chat = chats.find((c) => c._id == req.params.id);
    res.send(chat);
})

app.listen(port, () => {
    console.log(`server started on port ${port}`.yellow.bold);
});
