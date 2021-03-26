/**
 *  /resources/recipes/
 */

import express, { Request, Response } from 'express'

import { rest_status } from '../constants'

import * as RecipesService from './recipes.service'
import { BaseRecipe, Recipe } from './recipe.interface'

export const recipesRouter = express.Router()

recipesRouter.get('/', async (req: Request, res: Response) => {
  try {
    const recipes: Recipe[] = await RecipesService.findAll()
    res.status(rest_status.ok).send(recipes)
  } catch (e) {
    res.status(rest_status.internal_server_error).send(e.message)
  }
})