const express = require("express");
const cors = require("cors");

const productRouter = require("./routes/productRouter");
const authRouter = require("./routes/authRouter");
const categoryRouter = require("./routes/categoryRouter");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(cors());

require("dotenv").config();

app.use(express.json());
app.use(productRouter);
app.use(categoryRouter);
app.use(authRouter);
app.use(userRouter);

app.get("/", (req, res) => {
  res.send("root route");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port:${port}`));
