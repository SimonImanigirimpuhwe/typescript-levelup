import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Todo from '../models/todo';
import { error } from '../utils/error';
import { success } from '../utils/response';

const addTodo = async (req: Request, res: Response):Promise<void> => {
    const { title, description } = req.body;
    try {
        const newTodo = new Todo({
            title,
            description
        });
        const savedTodo = await newTodo.save();

        success(res, 201, savedTodo)
    } catch (err) {
        error(res, 500, {msg: 'Something went wrong'})
    }
};

const getTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos = await Todo.find().exec()
    
        success(res, 200, {todo: todos, count: todos.length})
    } catch (err) {
        error(res, 500, {msg: 'Something went wrong'})
    }
};

const getTodo = async (req: Request, res: Response): Promise<unknown> => {
    const { id } = req.params
    try {
        if (!mongoose.isValidObjectId(id)) return error(res, 400, {msg: 'Invalid Id'});
        
        const todo = await Todo.findById(id);
        if (!todo) return  error(res, 404, {msg: 'No Todo with such Id'})

        success(res, 200, todo)
    } catch (err) {
        error(res, 500, {msg: 'Something went wrong'})
    }
}
const updateTodo = async (req: Request, res: Response): Promise<unknown> => {
    const { id } = req.params
    try {
        if (!mongoose.isValidObjectId(id)) return error(res, 400, {msg: 'Invalid Id'});
        
        const todoToUpdate = await Todo.findOneAndUpdate({_id: id}, req.body, {returnOriginal:false});
        if (!todoToUpdate) return  error(res, 404, {msg: 'No Todo with such Id'})

        success(res, 200, todoToUpdate)
    } catch (err) {
        error(res, 500, {msg: 'Something went wrong'})
    }
}
const deleteTodo = async (req: Request, res: Response): Promise<unknown> => {
    const { id } = req.params
    try {
        if (!mongoose.isValidObjectId(id)) return error(res, 400, {msg: 'Invalid Id'});
        
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) return error(res, 404, {msg: 'No Todo with such Id'})

        success(res, 200, {msg: 'Todo item deleted successfully', todo })
    } catch (err) {
        error(res, 500, {msg: 'Something went wrong'})
    }
}

export { 
    addTodo, 
    getTodos, 
    getTodo, 
    updateTodo, 
    deleteTodo 
};