import { Router } from "express";
import { findAllMovies } from "../controllers/movie.controller";

const router = Router();

// Fetch all movies
router.get("/", async (_, res) => {
    const allMovies = await findAllMovies();

    res.json(allMovies);
});

router.post("/", async (req, res) => {
    const { id, title, person } = req.body as { id: string, title: string, person: string };

    if (!id || !title || !person) {
        res.status(400).json('message': "ID, title and person must be provided");
    }
})

export Router router;
