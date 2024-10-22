import express from "express";
import { CreateMovie, DeleteMovie, UpdateMovie,MovieIndex } from "../controllers/moviesController";
const router = express.Router();
// crud functionality of movies

// R reading

router.get('/',MovieIndex);

// c 

router.post('/', CreateMovie);

// E

router.put('/:id',UpdateMovie);

// D
router.delete('/:id',DeleteMovie);

export default router;