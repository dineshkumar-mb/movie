import express from "express";
import { CreateMovie,
     DeleteMovie,
      UpdateMovie,
      MovieIndex,
      MovieDetail} from "../controllers/moviesController.js";
const router = express.Router();
// crud functionality of movies

// R reading

router.get('/',MovieIndex);

router.get("/:id", MovieDetail);
// c 

router.post('/', CreateMovie);

// E

router.put('/:id',UpdateMovie);

// D
router.delete('/:id',DeleteMovie);

export default router;