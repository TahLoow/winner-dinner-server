import { Pool } from 'pg'
import { db } from '../utils/config'

const MAX_POOL_CONNECTIONS = 20

export const pool = new Pool({
  user: db.USER,
  host: db.HOST,
  database: db.NAME,
  port: Number(db.PORT),
  password: db.PASS,
  max: MAX_POOL_CONNECTIONS,
  connectionTimeoutMillis: 500, //Time for connecting client to wait if all connections are taken
  idleTimeoutMillis: 0 //Time to kill idle connections. 0 = Never Destroy
})
