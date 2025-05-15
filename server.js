
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.status(201).send('Tarefa criada com sucesso');
});

app.put('/tasks/:id', (req, res) => {
    const id = req.params.id;
    tasks[id] = req.body;
    res.send('Tarefa atualizada');
});

app.delete('/tasks/:id', (req, res) => {
    tasks.splice(req.params.id, 1);
    res.send('Tarefa removida');
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
