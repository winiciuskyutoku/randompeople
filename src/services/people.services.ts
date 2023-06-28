import { getPersonRepository } from "../repositories/people.controllers";

export async function randomPerson(){
    const result: Array<
    {
        "id": number,
        "firstName": string,
        "lastName": string
    }
    > = await getPersonRepository()

    const randomIndex = Math.floor(Math.random() * result.length);

    return result[randomIndex]
}