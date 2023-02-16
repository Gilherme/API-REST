import express from 'express';
const app = express();

// indicar para o express ler body com json escrito no insominia
app.use(express.json())

// mock

const selecoes = [
    {id: 1, selecao: 'Brasil', grupo: 'G'},
    {id: 2, selecao: 'Suíça', grupo: 'G'},
    {id: 3, selecao: 'Camarões', grupo: 'G'},
    {id: 4, selecao: 'Servia', grupo: 'a'}
]

// Função para buscar seleção por id
function getSelecaoById(id){
    return selecoes.filter( selecao => selecao.id == id)
}
// Função para buscar o indice da do array (a posição de cada seleção) passa o id e ele retorna o indice
function getIndexnSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id)
}

// criar rota padrão/ raiz
app.get('/',(req, res)=>{
    res.send('Hello Word!');
});

app.get('/selecoes', (req, res)=>{
    res.status(200).send(selecoes)
});

// quando usa /:nomeDoParan  cria um parametro, no cado "id". Esse caminho retorna a seleção de acordo com o id
app.get('/selecoes/:id',(req, res)=>{
    //let index = req.params.id
    res.json(getSelecaoById(req.params.id))
})

// rota para apagar seleção
app.delete('/selecoes/:id', (req, res)=>{
    let index = getIndexnSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`seleção com id: ${req.params.id} excluida com sucesso!`)
})

// post é usado para descrever um caminho onde será inserida informações/dados
app.post('/selecoes', (req, res)=>{
    selecoes.push(req.body)
    res.status(201).send('seleção cadastrada com sucesso!')
});

// o metodo put é usado para fazer atualizações 
app.put('/selecoes/:id', (req, res)=>{
    let index = getIndexnSelecao(req.params.id)
    selecoes[index].selecao  = req.body.selecao
    selecoes[index].grupo    = req.body.grupo
    res.json(selecoes) 
})

export default app;
