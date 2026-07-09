import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js'

dotenv.config();

await connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes)

//API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: "SkillPath AI API is running"
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})