const express = require("express");
const app = express();
const port = 3000;

const userRouter = require("./router/userRouter.js");


app.get("/", (req, res) => {
    res.send('Ini Landing Page!')
});

app.use("/users", userRouter);



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});