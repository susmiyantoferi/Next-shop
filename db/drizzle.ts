import { drizzle } from 'drizzle-orm/vercel-postgres'
import * as schema from './schema'
import { sql } from '@vercel/postgres'


const db = drizzle(sql, { schema })

export default db