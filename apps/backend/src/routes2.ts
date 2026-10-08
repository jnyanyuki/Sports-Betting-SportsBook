import { Router } from "express";
const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: true, message: "API v2 active" });
});

router.post("/sports/recents-history", (req, res) => {
  res.json({ status: true, data: [] });
});

router.all("/sports/*", (req, res) => {
  res.json({ status: true, data: [] });
});

export default router;
