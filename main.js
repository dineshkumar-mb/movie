import express from 'express';
import cors from 'cors';
import moviesRoutes from './routes/moviesRoutes.js';
import connectDB from './lib/db.js';
import payment from './routes/payment.js';

const app = express();
const PORT = 6969;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const allowedOrigins = [
  'http://localhost:5173', // Local development
  // 'https://dynamic-biscotti-a377ea.netlify.app' // Production frontend URL
];
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

// Connect to the database
connectDB();

// Basic route for health check or initial response
app.get('/', (req, res) => {
  res.json({ msg: 'Hello students!!' });
});

// Route handlers
app.use('/movies', moviesRoutes);
app.use('/apppayment', payment);

// Start the server
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
