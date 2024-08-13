import express from "express";
const router = express.Router();

router.get("/yeartwo", async (req, res) => {
  res.render("yearTwo/yearTwo");
});

// LOANS SQUAD
router.get("/loanssquad", async (req, res) => {
   res.render("yearTwo/loansSquad/loansSquadHome");
 });
 
 router.get("/loanssquadlearn", async (req, res) => {
   res.render("yearTwo/loansSquad/loansSquadLearn");
 });
 
 router.get("/loanssquadwork", async (req, res) => {
   res.render("yearTwo/loansSquad/loansSquadWork");
 });

// SCORE & REPORT SQUAD
router.get("/score&report", async (req, res) => {
  res.render("yearTwo/score&Report/score&ReportHome");
});

router.get("/score&reportlearn", async (req, res) => {
  res.render("yearTwo/score&Report/score&ReportLearn");
});

router.get("/score&reportwork", async (req, res) => {
  res.render("yearTwo/score&Report/score&ReportWork");
});

// MY CLEARSCORE FRONTEND
router.get("/mycsfrontend", async (req, res) => {
  res.render("yearTwo/myCSFrontend/myCSFrontendHome");
});

router.get("/mycsfrontendlearn", async (req, res) => {
  res.render("yearTwo/myCSFrontend/myCSFrontendLearn");
});

router.get("/mycsfrontendwork", async (req, res) => {
  res.render("yearTwo/myCSFrontend/myCSFrontendWork");
});

// MY CLEARSCORE IOS
router.get("/mycsios", async (req, res) => {
  res.render("yearTwo/myCSiOS/myCSiOSHome");
});

router.get("/mycsioslearn", async (req, res) => {
  res.render("yearTwo/myCSiOS/myCSiOSLearn");
});

router.get("/mycsioswork", async (req, res) => {
  res.render("yearTwo/myCSiOS/myCSiOSWork");
});




export default router; 