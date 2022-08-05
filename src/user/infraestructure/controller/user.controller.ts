import { Request, Response } from "express";
import { UserUseCase } from "../../application/use-cases/user.use-case";

export class UserController {
  constructor(private userUseCase: UserUseCase) {
    this.insertUser = this.insertUser.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  public async getUser({ query }: Request, res: Response) {
    const { uuid = '' } = query;
    const user = await this.userUseCase.getDetailUSer(`${uuid}`);
    res.send({ user });
  }

  public async insertUser({ body }: Request, res: Response) {
    const user = await this.userUseCase.registerUser(body);
    res.send({ user });
  }
}