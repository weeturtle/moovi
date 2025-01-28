import { Router } from "express";
import {
  addMovie,
  findAllMovies,
  removeMovie,
  removePerson,
  updateLastWatched,
} from "../controllers/movie.controller";

const router = Router();

// Fetch all movies
router.get("/", async (_, res) => {
  const allMovies = await findAllMovies();

  res.json(allMovies);
});

router.post("/", async (req, res) => {
  const { id, title, person } = req.body as {
    id: string;
    title: string;
    person: string[];
  };

  if (!id || !title || !person) {
    res.status(400).json({ message: "ID, title and person must be provided" });
    return;
  }

  try {
    await addMovie({ id, title, person });

    res.status(201).json({ message: "Movie added" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add movie" });
    return;
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ message: "ID must be provided" });
    return;
  }

  try {
    await removeMovie(id);

    res.status(204).json({ message: "Movie removed" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to remove movie" });
    return;
  }
});

router.put("/removePerson", async (req, res) => {
  const { id, person } = req.body as { id: string; person: string };

  if (!id || !person) {
    res.status(400).json({ message: "ID and person must be provided" });
    return;
  }

  try {
    await removePerson(id, person);

    res.status(204).json({ message: "Person removed" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to remove person" });
    return;
  }
});

router.put("/watched", async (req, res) => {
  const { id, watched } = req.body as { id: string; watched: Date };

  if (!id) {
    res.status(400).json({ message: "ID must be provided" });
    return;
  }

  try {
    await updateLastWatched(id, watched);

    res.status(204).json({ message: "Movie watched" });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update movie" });
    return;
  }
});

export default router;
