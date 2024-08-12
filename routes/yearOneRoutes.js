import express from "express";
const router = express.Router();

router.get("/yearone", async (req, res) => {
  res.render("yearOne/yearOne");
});

// MANAGER SQUAD
router.get("/managersquad", async (req, res) => {
  res.render("yearOne/managerSquad/managerSquadHome");
});

router.get("/managersquadwork", async (req, res) => {
  res.render("yearOne/managerSquad/managerSquadWork");
});

router.get("/managersquadlearn", async (req, res) => {
  res.render("yearOne/managerSquad/managerSquadLearn");
});

// TEST ENGINEERING
router.get("/testengineering", async (req, res) => {
  res.render("yearOne/testEngineering/testEngineeringHome");
});

router.get("/testengineeringlearn", async (req, res) => {
  res.render("yearOne/testEngineering/testEngineeringLearn");
});

router.get("/testengineeringwork", async (req, res) => {
  res.render("yearOne/testEngineering/testEngineeringWork");
});

// DESIGN SQUAD
router.get("/designsquad", async (req, res) => {
  res.render("yearOne/designSquad/designSquadHome");
});

router.get("/designsquadlearn", async (req, res) => {
  res.render("yearOne/designSquad/designSquadLearn");
});

router.get("/designsquadwork", async (req, res) => {
  res.render("yearOne/designSquad/designSquadWork");
});

// ACCESSIBILITY TASKFORCE
router.get("/accessibilitytaskforce", async (req, res) => {
  res.render("yearOne/accessibilityTaskforce/accessibilityTaskforceHome");
});

router.get("/accessibilitytaskforcelearn", async (req, res) => {
  res.render("yearOne/accessibilityTaskforce/accessibilityTaskforceLearn");
});

router.get("/accessibilitytaskforcework", async (req, res) => {
  res.render("yearOne/accessibilityTaskforce/accessibilityTaskforceWork");
});

export default router;
