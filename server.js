
import app from      './src/app.js'
import conexao from  './infra/conexao.js'

const PORT = 3001

//fazer conexao
conexao.connect((erro) => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conexão realizada com sucesso!!')
        // escutar a porta 3001
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereço http://localhost:${PORT}`);
        });
    }
})

