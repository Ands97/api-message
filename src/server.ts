import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
import bodyParser from 'body-parser' 


dotenv.config();
const server = express();
server.use(cors({}));


server.use(bodyParser.json())
server.use(express.urlencoded({extended: true}));


server.post('/sendMessage', async (req: Request, res: Response) => {
    const data = req.body
    const ProductName = data.data.product.name
    const name = data.data.producer.name;
    const number = '83986538971'
    const message = `Olá, ${name}! seu pedido do produto ${ProductName} foi feito com sucesso!`
    console.log(message)
    await axios.post('http://localhost:8000/send-message', {number, message})
    res.status(200).end()
})

server.listen(process.env.PORT);



