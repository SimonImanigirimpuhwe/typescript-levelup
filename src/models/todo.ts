import { model, Schema } from 'mongoose';
import TodoItem from '../interfaces/todo';

const todoSchema: Schema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true});

export default model<TodoItem>('Todo', todoSchema);
