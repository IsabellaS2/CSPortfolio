// Importing frameworks
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 2000;

// Using bodyParser middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serving static files from the 'public' directory
app.use(express.static("public"));

// Setting the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

// Render year one home page
app.get("/yearone", async (req, res) => {
  res.render('yearOne/yearOne');
});

app.get("/testengineering", async (req, res) => {
  res.render('yearOne/testEngineering/testEngineeringMain');
});

// Render year two home page
app.get("/yeartwo", async (req, res) => {
  res.render("yearTwo/yearTwo");
});

// Render year three home page
app.get("/yearthree", async (req, res) => {
  res.render("yearthree");
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
