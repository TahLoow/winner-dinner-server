import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { recipesRouter } from './recipes/recipes.router'

import { db } from './utils/config'

const app = express()
const port = 3001

app.use(helmet())
app.use(cors())
app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  next()
})
app.use("/resources/recipes", recipesRouter);
/*
app.post('/merchants', (req, res) => {
    winnerdinner_model.createMerchant(req.body)
  .then(response => {
    res.status(200).send(response)
  })
  .catch(error => {
    res.status(500).send(error)
  })
})

app.delete('/merchants/:id', (req, res) => {
    winnerdinner_model.deleteMerchant(req.params.id)
  .then(response => npm install -D @types/node
{
    res.status(200).send(response)
  })
  .catch(error => {
    res.status(500).send(error)
  })
})
*/
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
  console.log(db.USER)
})