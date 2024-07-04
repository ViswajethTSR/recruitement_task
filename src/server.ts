import express from "express";
import bodyParser from 'body-parser'
import userRoutes from "./routes/user_routes";
import './controllers/mongo_connect';

export const server = express();


const PORT = process.env.PORT || 3000

server.use(express.json());

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send("<body> Hi !! This is Viswajeth, This is a Recruitment Task</body>");
});

server.use('/user', userRoutes);


server.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
})
