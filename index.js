// Importing frameworks
import express from "express";
import bodyParser from "body-parser";
import yearOneRoutes from "./routes/yearOneRoutes.js";
import yearTwoRoutes from "./routes/yearTwoRoutes.js";
import yearThreeRoutes from "./routes/yearThreeRoutes.js";

const app = express();
const port = 2000;

// Using bodyParser middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serving static files from the 'public' directory
app.use(express.static("public"));

// Setting the view engine to ejs
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.use("/", yearOneRoutes);

app.use("/", yearTwoRoutes);

app.use("/", yearThreeRoutes);

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
