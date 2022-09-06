import express from 'express';
import dotenv from 'dotenv';

import  { chats } from './data/data.js'

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("app is running");
})

app.get("/api/chats", (req, res) => {
    res.send(chats);
})

app.get("/api/chats/:id", (req, res) => {
    // console.log(req.params.id);
    const chat = chats.find((c) => c._id == req.params.id);
    res.send(chat);
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});
