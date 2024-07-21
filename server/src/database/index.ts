import { connect } from 'mongoose';
require('dotenv').config();

const connectDB = async () => {
    try {
        await connect(String(process.env.DATABASE_URL))
            .then(() => console.log('Database connected'));
    } catch (error) {
        console.error('Database connection error:', error);
    }
}


export default connectDB;