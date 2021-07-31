import { pool } from '../database/database.service'

import { Recipe } from '../types/tstypes'
import { recipesRouter } from './recipes.router'

const queryForRecipeArray = (query_string: string): Promise<Recipe[]> => {
  return new Promise<Recipe[]>(function (resolve, reject) {
    pool.query(query_string, (error, results) => {
      if (error || results == null || results == undefined) {
        reject(error)
        console.log(error)
        return
      } else {
        const all_recipes: Recipe[] = []
        results.rows.forEach((row, i) => {
          all_recipes[i] = {
            name: row.name,
            description: row.description,
            created_on: row.created_on,
            is_winner: row.is_winner,
            is_private: row.is_private,
            link: row.link,
            instructions: row.instructions,
            servings: row.servings,
            time_cook: row.time_cook
          }
        })
        resolve(all_recipes)
      }
    })
  })
}


// Should be all ** public ** recipes
export const findAll = (): Promise<Recipe[]> => {
  return queryForRecipeArray('SELECT * FROM recipes ORDER BY created_on ASC')
}

/*
export const find = async (id: number): Promise<Recipe> => {...};

export const create = async (newRecipe: BaseRecipe): Promise<Recipe> => {...};

export const update = async (
  id: number,
  itemUpdate: BaseRecipe
): Promise<Recipe | null> => {...};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
*/
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
  findAll,
}