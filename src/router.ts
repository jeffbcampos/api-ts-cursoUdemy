import { Request, Response, Router } from "express";
import { createMovie, findAllMovies, findMovieById, removeMovie, updateMovie } from "./controller/movieController";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router()

router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Api working!")
})
router.post("/movie", movieCreateValidation(), validate, createMovie);
router.get("/movie/:id", findMovieById);
router.get("/movies", findAllMovies);
router.delete("/movie/:id", removeMovie)
router.patch("/movie/:id", movieCreateValidation(), validate, updateMovie)


export default router;