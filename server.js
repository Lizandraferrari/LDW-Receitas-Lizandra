const express = require("express");
const path = require("path");
const dadosReceitas = require('./public/data.json')

const app = express();
app.use(express.static("public"));

app.get("/:tipo/:slug", (req, res) => {
    const { tipo, slug } = req.params
    const receita = dadosReceitas.find(item => item.tipo == tipo && item.slug == slug)
    if (receita) {
      res.sendFile(path.join(__dirname, "/public/pages/receita.html"));
    }
})

app.get("/:page?", (req, res) => {
    let page = req.params.page || "index";
    res.sendFile(path.join(__dirname, "/public/pages/", `${page}.html`));
});


app.listen(3000, () => console.log("http://localhost:3000"));
