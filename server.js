const fs = require("fs");
const notesData = require("./db/db.json");
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json({}));

app.use(express.static("public"));

// GET Route for index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for notes.html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

//Note Taker API
app.get("/api/notes", (req, res) => {
  res.status(200).json(notesData);
});

//setup post to add data
app.post("/api/notes", (req, res) => {
  if (req.body) {
    //This will ensure we set a unique id
    let newId = 0;
    for (let i = 0; i < notesData.length; i++) {
      if (parseInt(notesData[i].id) >= newId) {
        newId = parseInt(notesData[i].id) + 1;
      }
    }

    req.body.id = newId;
    const { id, title, text } = req.body;

    res.json(`ADDED ${title} - ${text}`);

    let notes = notesData;
    notes.push(req.body);

    fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
      if (err) throw err;
    });
  } else {
    res.json("NO NOTES ADDED");
  }
});

//TODO: create for loop to update notes by ids
app.put("/api/notes", (req, res) => {
  if (req.body) {
    for (let i = 0; i < notesData.length; i++) {
      if (parseInt(req.body.id) === parseInt(notesData[i].id)) {
        notesData[i].text = req.body.text;
        notesData[i].title = req.body.title;
      }
    }
  }

  fs.writeFile("./db/db.json", JSON.stringify(notesData), function (err) {
    if (err) throw err;
  });

  res.json(`${req.method} was used on api/notes!`);
});

//setup delete to remove data
app.delete("/api/notes/:id", (req, res) => {
  const path = req.url.split("/");
  const id = path[path.length - 1];
  let notes = notesData;

  for (let i = 0; i < notes.length; i++) {
    if (parseInt(id) == parseInt(notes[i].id)) {
      notes.splice(i, 1);
    }
  }

  fs.writeFile("./db/db.json", JSON.stringify(notes), function (err) {
    if (err) throw err;
  });

  res.json(`${req.method} was used on api/notes!`);
});

app.get("*", (req, res) => {
  res.status(404).send("404 NOTHING HERE!");
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
