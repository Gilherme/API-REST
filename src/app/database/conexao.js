import mysql from 'mysql'

const conexao = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'Gui1324',
  database: 'dbapirest'
})

conexao.connect()

export default conexao