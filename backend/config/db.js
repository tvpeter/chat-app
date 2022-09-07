import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`mongodb connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Connection Error: ${error.message}`.red.bold);
        process.exit();
    }
}

export { connectDB };
