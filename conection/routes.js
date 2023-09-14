import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
import { Router } from "express";

dotenv.config()

const router = Router()
const database = process.env.MONGO_URI
const nombreBase = "MicroservicioCL_EPS"

router.get("")

export default router

