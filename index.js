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

//render year one home page
app.post("/yearone", async (req, res) => {
});

//render year two home page
app.post("/yeartwo", async (req, res) => {
});

//render year three home page
app.post("/yearthree", async (req, res) => {
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
