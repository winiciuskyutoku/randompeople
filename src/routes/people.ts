import { getPerson } from "../controllers/people.controllers";
import { Router } from "express";

const people = Router()

people.get("/person", getPerson)

export default people