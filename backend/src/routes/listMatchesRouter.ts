import { Router } from "express";
import { allMatches } from "../controllers/listMatches.controller";

const router = Router();

router.get("/all-matches", allMatches);

export { router as listMatchesRouter };
