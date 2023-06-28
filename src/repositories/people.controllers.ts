import { db } from "../database/database.connection"

export async function getPersonRepository(){
    const result = await db.query(`SELECT * FROM people;`)

    return result.rows
}