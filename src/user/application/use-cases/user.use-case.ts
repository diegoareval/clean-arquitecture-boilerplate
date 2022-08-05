import { UserValue } from './../../domain/user.value';
import { UserRepository } from './../../domain/user.repository';

export class UserUseCase {
   constructor(private readonly userRepository: UserRepository){}

   async registerUser({name, email, description}){
       const userValue = new UserValue({name, email, description})
      const userCreated = await this.userRepository.registerUser(userValue);
      return userCreated;
   }

   public  getDetailUSer = async (uuid:string) => {
      const user = await this.userRepository.findUserById(uuid)
      return user
    }
}