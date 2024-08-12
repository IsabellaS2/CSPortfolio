import express from "express";
const router = express.Router();

router.get("/yearthree", async (req, res) => {
  res.render("yearThree/yearThree");
});

// Add other routes related to Year Three here

export default router; 