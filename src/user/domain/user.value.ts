import {v4 as uuid} from 'uuid';
import { UserEntity } from './user.entity';

export class UserValue  implements UserEntity{
    name: string
    email: string;
    description: string;
    uuid: string;

    constructor({name, email, description}: {name: string, email: string, description?: string}){
       this.email = email;
       this.name = name;
       this.description = description ?? 'default';
       this.uuid = uuid()
    }
}