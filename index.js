const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./router/userRouter.js");
const itemRouter = require("./router/itemRouter.js");

app.use(express.json()); // for reading body request in json format

app.get("/", (req, res) => {
    res.send('Welcome to BingleShop Landing Page!')
});

app.use("/users", userRouter);
app.use("/items", itemRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});