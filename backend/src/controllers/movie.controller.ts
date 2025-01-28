import { IMovie, Movie, NewMovie } from "../model/movie.model";

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
    console.log(existingMovie.person);
    console.log(movie.person);
    existingMovie.person = [
      ...new Set([...existingMovie.person, ...movie.person]),
    ];
    return await existingMovie.save();
  } else {
    return await Movie.create(movie);
  }
};

export const removeMovie = async (id: string) => {
  return await Movie.deleteOne({ id });
};

export const removePerson = async (id: string, person: string) => {
  const movie = await Movie.findOne({ id });

  if (!movie) {
    throw new Error("Movie not found");
  }

  movie.person = movie.person.filter((p) => p !== person);

  if (movie.person.length === 0) {
    return await Movie.deleteOne({ id });
  } else {
    return await movie.save();
  }
};

export const updateLastWatched = async (id: string, watched?: Date) => {
  if (!watched) {
    watched = new Date();
  }

  const movie = await Movie.findOne({ id });

  if (!movie) {
    throw new Error("Movie not found");
  }

  movie.lastWatched = watched;

  return await movie.save();
};
