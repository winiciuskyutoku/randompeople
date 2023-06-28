import { Request, Response } from "express"
import { randomPerson } from "../services/people.services"

export async function getPerson(req: Request ,res: Response){
    try {
        const result: {
            "id": number,
            "firstName": string,
            "lastName": string
        } = await randomPerson()

        res.send(result)
    } catch(err){
        res.status(500).send(err.message)
    }
}