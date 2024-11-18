import mongoose from "mongoose";

// Define the schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Store image URL as a string
        required: true // Make it required if every movie needs an image
    }
});
  
// Create the model
const Movie = mongoose.model("Movie", movieSchema);

// Export the model
export default Movie;
