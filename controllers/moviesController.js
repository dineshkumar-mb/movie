import Movie from "../models/movieModel.js";

// R reading
export const MovieIndex = async (req, res) => {
   try {
     const movies = await Movie.find();
     res.json(movies);
   } catch (error) {
     res.status(500).json({ message: error.message });  
   }
 };
 
      // C create
   export const CreateMovie =async (req,res)=>{
      //id,title,description
   // Validate your data.
const newMovie = new Movie({
title: req.body.title,
description: req.body.description,
image:req.body.image
});
try {
const movie = await newMovie.save();
return res.status (201).json (movie);
} catch (error) {
return res.status (400).json({ message: error.message });
}
};

export const MovieDetail = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (movie == null) {
      return res.status(404).json({ message: "Cannot find movie" });
    } else {
      res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

 // E update
export const UpdateMovie = async (req, res) => {
   try {
     const updatedMovie = await Movie.findOneAndUpdate(
       { _id: req.params.id },
       {
         title: req.body.title,
         description: req.body.description,
         image:req.body.image
       },
       {
         new: true,
       }
     );
     res.status(200).json(updatedMovie);
   } catch (error) {
     res.status(400).json({ message: error.message });
   }
 };
  //D delete movie
 export const DeleteMovie = async (req, res) => {
   const movieId = req.params.id;
 
   try {
     await Movie.deleteOne({ _id: movieId });
     res.json({ message: "Movie deleted!" });
   } catch (error) {
     res.status(500).json({ message: error.message });
   }
 };
   

  

   
  