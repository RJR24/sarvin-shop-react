const express = require("express");
const productRouter = require("./routes/productRouter");
const authRouter = require("./routes/authRouter");
const app = express();
require("dotenv").config();


app.use(express.json())
app.use(productRouter);
app.use(authRouter);

app.get("/", (req, res) => {
  res.send("root route");
});



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port:${port}`));
