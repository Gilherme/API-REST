import conexao from "../database/conexao.js"

class selecaoRepository {
  //CRUD
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?; "
    return new Promise((resolve, reject) => {
      conexao.query(sql, selecao, (error, result) => {
        if(error) return reject('Erro na criação da seleção')
        // Fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(result))
        return resolve(row)
      })
    })
    
  }
  findAll() {
    const sql = "SELECT * FROM selecoes"
    return new Promise((resolve, reject) => {
      conexao.query(sql, (error, result) => {
        if(error) return reject('não foi possível localizar')
        const row = JSON.parse(JSON.stringify(result))
        return resolve(row)
      })
    })
  }
  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;"
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, result) => {
        if(error) return reject('Seleção não encontrada')
        const row = JSON.parse(JSON.stringify(result))
        return resolve(row)
      })
    })
  }
  upDate(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?;"
    return new Promise((resolve, reject) => {
      conexao.query(sql, [selecao, id], (error, result) => {
        if(error) return reject('Não foi possível atualizar')
        const row = JSON.parse(JSON.stringify(result))
        return resolve(row)
      })
    })
    
  }
  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id=?;"
    return new Promise((resolve, reject) => {
      conexao.query(sql, id, (error, result) => {
        if(error) return reject('Não foi possível apagar')
        const row = JSON.parse(JSON.stringify(result))
        return resolve(row)
      })
    })
  }

}

export default new selecaoRepository()
