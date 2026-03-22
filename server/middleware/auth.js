export const verifyKey = (req, res, next) => {
  const key = req.headers["x-game-key"];

  if (key !== process.env.GAME_SECRET) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  next();
};
