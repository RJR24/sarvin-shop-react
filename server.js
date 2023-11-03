const express = require("express");
const productRouter = require("./routes/productRouter");
const app = express();

app.use(productRouter)

app.get("/", (req, res) => {
  res.send("root route");
});


const port = 5000;
app.listen(port, () => console.log(`server is running on port:${port}`));
