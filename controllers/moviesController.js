
// R reading
 export const MovieIndex = (req,res)=>{
    res.send("Get all movie list");
   };

   // C create
   export const CreateMovie = (req,res)=>{
      //id,title,desc
      console.log(req.body);
      return res.json(req.body);
      
   
   };

   // E update

   export const UpdateMovie = (req,res)=>{
    res.send("Update a movie ");
   };

   //D delete

   
   export const DeleteMovie = (req,res)=>{
    res.send("Delete a movie ");
   };