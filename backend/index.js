const express = require('express');
const sqlite = require('better-sqlite3');
const cors = require("cors");
const app = express();
const db = new sqlite(__dirname + '/quotes.db');

db.prepare(`
CREATE TABLE IF NOT EXISTS quotes (
  id INTEGER PRIMARY KEY,
  author TEXT,
  text TEXT
)
`).run();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('/read_quote', (_req, res) => {
  const quote = db.prepare('SELECT * FROM quotes ORDER BY RANDOM() LIMIT 1').get();
  res.json(quote);
})

app.post('/write_quote', (req, res) => {
  const { author, text } = req.body;
  if (!author || !text) return res.status(400).json({ error: "Missing fields" });
  db.prepare('INSERT INTO quotes (author, text) VALUES (?, ?)').run(author, text);
  res.json({ succes: true });
});

app.listen(3000, () => console.log('Server on http://localhost:3000'));
