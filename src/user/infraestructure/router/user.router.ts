import { Router } from "express";
import { UserUseCase } from "../../application/use-cases/user.use-case";
import { UserController } from "../controller/user.controller";
import { MongoRepository } from "../repository/mongo.repository";

const route = Router()

const userRepo = new MongoRepository()
const userUseCase = new UserUseCase(userRepo)

const userCtrl = new UserController(userUseCase)

route.post(`/user`, userCtrl.insertUser)
route.get(`/user`, userCtrl.getUser)

export default route