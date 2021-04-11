import { Router } from 'express';
import { addTodo, deleteTodo, getTodo, getTodos, updateTodo } from '../controllers/todo';

const router = Router();

router.post('/', addTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);


export default router;