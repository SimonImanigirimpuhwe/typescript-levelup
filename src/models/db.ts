import mongoose from 'mongoose';
import Options from '../interfaces/option';

const options:Options = {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
};

const url: string = process.env.DATABASE_ULR || `mongodb://localhost:27017/${process.env.DB_NAME}`;


export default mongoose.connect(url, options)
.then((): void => console.log('Databse connected successfully'))
.catch((err): never => { throw new Error(err) })