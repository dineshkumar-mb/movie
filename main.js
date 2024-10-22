import express from "express";

import moviesRoutes from "./routes/moviesRoutes.js";
import { connect } from "mongoose";
import connectDB from "./lib/db.js";
const app =express();
const PORT=6969;
// data understanding middlewares
app.use(express.json());
// connect DB

connectDB();
app.get ('/',(req, res)=>{
    res.json({msg:"hello students!!"});
});

// client-> middleware
app.use('/movies',moviesRoutes);
app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
    
}); 