import {Request, Response} from 'express';
import Users from '../models/userModel';

export const users = async(req: Request, res: Response)=>{
    try {
        let users = await Users.find({})
        res.json(users)
    } catch (error) {
        res.json({message: error})
    }
}

export const newUser = async(req: Request, res: Response)=>{
    try {
        let {name, surname} = req.body
        let newUser = await Users.create({name, surname})
        res.json(newUser)
    } catch (error) {
        res.json({message: error})
    }
}