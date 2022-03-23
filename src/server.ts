import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors'



dotenv.config();
const server = express();
server.use(cors({}));

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json())
server.use(express.urlencoded({extended: true}));


const webhook = axios.get('http://')



server.use('*', (req: Request, res: Response)=>{
    res.status(404).json({error: 'Endpoint não encontrado'})
})

server.listen(process.env.PORT);



