import { connect } from 'mongoose';
require('dotenv').config();

const db = connect(String(process.env.DATABASE_URL))
    .catch((error) => console.error('Database connection error:', error));

export default db;