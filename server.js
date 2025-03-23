const express = require("express");
const path = require("path");

const app = express();
app.use(express.static("public"));

app.get("/:page?", (req, res) => {
    let page = req.params.page || "index";
    res.sendFile(path.join(__dirname, "/public/pages/", `${page}.html`));
});

app.listen(3000, () => console.log("On http://localhost:3000"));
