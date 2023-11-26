import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
const port = 8000;

//create connection with mongodb
mongoose.connect("mongodb://127.0.0.1:27017/keeperDB");

const notesSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Note = mongoose.model("Note", notesSchema); 

app.get("/", (req, res) => {
    return res.json("From Backend Side");
});

//retrieve data from mongodb
app.get("/notes", (req, res) => {
    Note.find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

//save data into mongodb
app.post("/createnote", (req, res) => {
    const noteTitle = req.body.title;
    const noteContent = req.body.content;

    const note = new Note({
        title: noteTitle,
        content: noteContent
    });

    note.save();

});

//delete data from mongodb
app.post("/delete/:id", (req, res) => {
    const id = req.params.id;

    Note.findByIdAndDelete({_id: id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

app.listen(port, () => {
    console.log(`The server is now running on the port ${port}.`)
});