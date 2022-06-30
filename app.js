const express = require("express");
const app = express();

app.use("/src", express.static(__dirname + "/src"));

app.listen(5000, () => {
    console.log("App is running on port 5000");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/src/index.html");
});