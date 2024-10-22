import express from "express";
const app =express();
const PORT=6969;
app.get ('/',(req, res)=>{
    res.json({msg:"hello students!"});
});

// crud functionality of movies

// R reading

app.get('/movies',()=>{

});

// c 

app.post('/movies',()=>{

});

// E

app.put('/movies/:id',()=>{

});

// D
app.delete('/movies/:id',()=>{

});

// 
app.listen(PORT,()=>{
    console.log(`The server is running at http://localhost:${PORT}`);
    
});