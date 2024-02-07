const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./router/userRouter");
const itemRouter = require("./router/itemRouter");
const orderRouter = require("./router/orderRouter");

app.use(express.json()); // for reading body request in json format

// for views ejs
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false/true}));

app.get("/", (req, res) => {
    res.send('Welcome to BingleShop Landing Page!')
});

app.use("/users", userRouter);
app.use("/items", itemRouter);
app.use("/orders", orderRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});