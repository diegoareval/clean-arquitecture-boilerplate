import { UserEntity } from './user.entity';

export interface UserRepository {
 findUserById(uuid:string): Promise<UserEntity | null>
 registerUser({name, email, description}): Promise<UserEntity | null>
 listUser(): Promise<Array<UserEntity>
}