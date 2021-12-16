import { Schema, model } from "mongoose";

type ChecklistType = {
    title: string,
    done: boolean,
    priority: number
}

const checklistSchema = new Schema<ChecklistType>({
    title: {type: String, required: true},
    done: {type: Boolean, default: false},
    priority: {type: Number, default: 4}
});

export default model<ChecklistType>('Checklist', checklistSchema);