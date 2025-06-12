import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';


dotenv.config();

const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'Komunitas Kampus API is running.' });
});
app.use(express.json());

app.use('/auth', authRoutes);


export default app;