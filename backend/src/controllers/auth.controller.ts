import { Request, Response } from "express";

const users = require("../json/userProfile");

const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY || "battle-arena";

export const login = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { login, password } = req.body;

    const user: any = await users.find(
      (u: any) => u.login === login && u.password === password,
    );

    if (!user)
      return res.status(401).json({ message: "Неверный логин или пароль" });

    const token = jwt.sign({ id: user.id, login: user.login }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
