require('dotenv').config();

const express = require('express');

// const tasksController = require('./controller/tasksController');

const app = express();

app.use(express.json());

app.get('/tasks', (req, res) => {
  console.log('entrou');
});

app.post('/tasks', (req, res) => {
  console.log('entrou');
});

app.put('/tasks', (req, res) => {
  console.log('entrou');
});

app.delete('/tasks', (req, res) => {
  console.log('entrou');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
