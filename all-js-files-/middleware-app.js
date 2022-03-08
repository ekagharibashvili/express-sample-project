const express = require("express");
const app = express();
const logger = require("../logger");
const authorize = require("../authorize");
const morgan = require("morgan"); // third party middleware
// req => middleware => res
// app.use(logger); // works on all routes
// app.use('/api', logger) // works only routes after /api
// api/home/about/products

// below, using multiple middleware functions
// app.use([authorize, logger]) // our own middleware
// app.use(express.static('./public)) // express middleware
app.use(morgan('tiny'))

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
    console.log(req.user)
  res.send("Items");
});


// if you want to use both of middleware on only one route we do like below
/* app.get("/api/items", [logger, authorize], (req, res) => {
    console.log(req.user)
  res.send("Items");
}); */

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
