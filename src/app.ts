import express, { Application, Request, Response } from 'express';
import './models/db';
import routes from './routes';

const app: Application = express();
app.use(express.json())

app.use('/api', routes)

app.get('/', (req: Request, res: Response): void => {
    res.send('Welcome to TypesScript todo api')
})

export default app;