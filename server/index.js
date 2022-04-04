import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

app.use('/user', userRoutes);

const PORT = 5000;

mongoose
	.connect(process.env.NODE_APP_MONGODB_CONNECTION_URL)
	.then(
		() => console.log('database connected'),
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log({ error }));
