import { loadEnvConfig } from "@next/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { cwd } from "node:process";
import { Client } from "pg";
import * as schema from './schema'
import data from "@/lib/data";

loadEnvConfig(cwd())

const main = async () => {
    try {
        const client = new Client({
            connectionString: process.env.POSTGRES_URL,
        })
        await client.connect()
        const db = drizzle(client)

        await db.delete(schema.products)

        const resProduct = await db
        .insert(schema.products)
        .values(data.products)
        .returning()
        console.log({ resProduct })
        await client.end()
    }
    catch (error) {
        console.error(error)
        throw new Error("Failed to seed database")
    }
}

main()