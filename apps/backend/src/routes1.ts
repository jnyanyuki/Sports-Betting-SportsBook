import { Router } from "express";
const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: true, message: "API v1 active" });
});

export default router;
