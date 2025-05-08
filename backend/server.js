const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/notesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Note schema and model
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model('Note', noteSchema);

// GET all notes
app.get('/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// POST a new note
app.post('/notes', async (req, res) => {
  const { title, content } = req.body;
  const note = new Note({ title, content });
  await note.save();
  res.status(201).json(note);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
