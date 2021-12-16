import {connect} from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

export const mongoConnect =async () => {
    try {
        console.log("Conectando ao banco de dados MongoDb");
        await connect(process.env.MONGO_URL as string);
        console.log("Banco de dados conectado com sucesso")
    } catch (error) {
        console.log(error)
    }
}
