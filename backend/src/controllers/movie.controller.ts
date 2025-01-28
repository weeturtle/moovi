import { Movie, NewMovie } from "../model/movie.model";

// Find all movies

export const findAllMovies = async () => {
    return await Movie.find();
};

export const addMovie = async (movie: NewMovie) => {
    // Find if movie already exists with id
    // If it does, add person to array
    // if not, create new movie

    const existingMovie = await Movie.findOne({ id: movie.id });

    if (existingMovie) {
        existingMovie.people.push("Max");
        return await existingMovie.save();
    } else {
        return await Movie.create(movie);
    }
};
