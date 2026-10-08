import { Router } from "express";
const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: true, message: "API v3 active" });
});

export default router;
