import express from "express";
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import discussionRoutes from './routes/discussionRoutes.js';

dotenv.config();

const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'Komunitas Kampus API is running.' });
});
app.use(express.json());
app.use('/discussion', discussionRoutes);
app.use('/auth', authRoutes);
app.use('/event', eventRoutes);


export default app;