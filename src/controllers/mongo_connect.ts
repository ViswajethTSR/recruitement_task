import mongoose from "mongoose";
import '../models/user_model';

const mongodb_uri: string | any = process.env.MONGODB_URI;
mongoose.connect(mongodb_uri).then(() => {
    console.log('MongoDB connection established.');
})
.catch((error) => console.error("MongoDB connection failed:", error.message))

