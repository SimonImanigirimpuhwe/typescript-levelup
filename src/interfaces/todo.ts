import { Document } from 'mongoose';

export default interface TodoItem extends Document{
    title:string;
    description:string;
}