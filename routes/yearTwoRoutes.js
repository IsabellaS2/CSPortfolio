import express from "express";
const router = express.Router();

router.get("/yeartwo", async (req, res) => {
  res.render("yearTwo/yearTwo");
});

// Add other routes related to Year Two here

export default router; 