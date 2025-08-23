import { Request, Response } from "express";
const listMatches = require("../json/listMatches");

export const allMatches = async (req: Request, res: Response) => {
  try {
    res.status(200).json(listMatches);
  } catch (error: any) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};
