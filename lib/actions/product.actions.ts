"use server"

import db from "@/db/drizzle"
import { products } from "@/db/schema"
import { desc, eq } from "drizzle-orm"


export async function getLatestProducts() {
    const data = await db.query.products.findMany({
        orderBy: [desc(products.createdAt)],
        limit: 4,
    })

    return data

}

export async function getProductBySlug(slug:string) {
    const data = await db.query.products.findFirst({
        where: eq(products.slug, slug),
    })

    return data
    
}