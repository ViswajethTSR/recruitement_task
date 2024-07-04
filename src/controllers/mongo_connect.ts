import mongoose from "mongoose";
import '../models/user_model';

const mongodb_uri: string | any = "mongodb+srv://viswajeth:viswajeth123@cluster0.1vyfusy.mongodb.net/task?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongodb_uri).then(() => {
    console.log('MongoDB connection established.');
})
.catch((error) => console.error("MongoDB connection failed:", error.message))

