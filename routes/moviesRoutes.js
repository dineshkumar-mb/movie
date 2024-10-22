import express from "express";
const router = express.Router();
// crud functionality of movies

// R reading

router.get('/',(req,res)=>{
 res.send("Get all movie list");
});

// c 

router.post('/',(req,res)=>{
    res.send("Create a movie ");

});

// E

router.put('/:id',(req,res)=>{
    res.send("Update a movie "); 
});

// D
router.delete('/:id',(req,res)=>{
    res.send("Delete a movie ");
});

export default router;