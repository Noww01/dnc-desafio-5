import app from './src/app';
import connectDB from './src/database';

connectDB();
app.listen(3000, () => console.log('Server started'));