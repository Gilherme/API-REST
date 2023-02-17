import express from 'express';
import selecaoController from './app/controllers/selecaoController.js';

const app = express();

// indicar para o express ler body com json escrito no insominia
app.use(express.json())

/******** ROTAS  ***********/

app.get('/selecoes', selecaoController.index)
app.get('/selecoes/:id', selecaoController.show)
app.post('/selecoes', selecaoController.store)
app.put('/selecoes/:id', selecaoController.update)
app.delete('/selecoes/:id', selecaoController.delete)

export default app;
