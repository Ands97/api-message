import { Request, Response} from 'express';
import Checklist from '../models/checklistModel';

export const checklists = async(req: Request, res: Response)=>{
    try {
        let lists = await Checklist.find({}).sort({priority: -1})
        res.json(lists);
    } catch (error) {
        res.status(404).json({error: error})
    }
}

export const checklistId = async(req: Request, res: Response)=>{
    try {
        let id = req.params.id;
        let item = await Checklist.findOne({_id: id})
        res.json(item)
    } catch (error) {
        res.status(404).json({error: error})
    }
}

export const addChecklist = async(req: Request, res: Response)=>{
    try {
        let title = req.body.title
        let newChecklist = await Checklist.create({title: title})
        res.json(newChecklist);
    } catch (error) {
        res.json({error: error})
    }
}

export const updateChecklist = async(req: Request, res: Response)=>{
    try {
        let id = req.params.id;
        let {title, done, priority} = req.body
        let newItem = await Checklist.updateOne({_id: id},{title, done, priority});
        res.json(newItem)
    } catch (error) {
        res.status(404).json({error: error})
    }
}

export const deleteChecklist =  async(req: Request, res: Response)=>{
    try {
        let id = req.params.id;
        let delItem = await Checklist.deleteOne({_id: id});
        res.json({message: 'Checklist excluido'})
    } catch (error) {
        res.status(404).json({error: error})
    }
}
export const deleteAll =  async(req: Request, res: Response)=>{
    try {
        let delChecklists = await Checklist.deleteMany({});
        res.json({message: 'todos exluidos'})
    } catch (error) {
        res.status(404).json({error: error})
    }
}