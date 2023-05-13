const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());


// Get Item Data By Category
app.get("/api", async (req, res) => {
  res.send("API running");
});


app.listen(80, ()=>{
  console.log("Server started")
});
