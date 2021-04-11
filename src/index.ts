import app from './app';

const PORT: number|string = process.env.PORT || 5000;

app.listen(PORT, ():void => console.log(`Server running on port ${PORT}`));