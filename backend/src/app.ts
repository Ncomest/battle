import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { apiRouter } from "./routes/api";
import { authRouter } from "./routes/authRouter";
import { listMatchesRouter } from "./routes/listMatchesRouter";

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Роуты
app.use("/health", (req, res) => res.status(200).json({ message: "OK" }));
app.use("/api", apiRouter);
app.use("/api/auth", authRouter);
app.use("/api/list-matches", listMatchesRouter);

export default app;
