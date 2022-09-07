import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import { connectDB } from './config/db.js';
import { router as userRoutes } from './routes/userRoutes.js';

const app = express();
dotenv.config();

app.use(express.json());
connectDB();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("app is running");
})
app.use("/api/user", userRoutes);

app.listen(port, () => {
    console.log(`server started on port ${port}`.yellow.bold);
});
