import { Pool as Pool } from 'pg';

const pool = new Pool({
  user: 'suleiman',
  host: '104.238.129.140',
  database: 'winnerdinner_dev',
  password: 'fierfal**',
  port: 5432,
});


export const getRecipes = () => {
  return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM recipes ORDER BY id ASC', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  })
}

/*
const createMerchant = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body
    pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}
const deleteMerchant = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`Merchant deleted with ID: ${id}`)
    })
  })
}*/

module.exports = {
  getRecipes,
}