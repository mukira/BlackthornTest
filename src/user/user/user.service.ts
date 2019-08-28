import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        try {
           return await this.userRepository.find(); 
        } catch (error) {
           return error; 
        }
    }

    async find(id): Promise<User> {
        return await this.userRepository.findOneOrFail(id)
    }

    async create(user: User){
        try {
            // check for existing user
            const existingUser = this.userRepository.findOneOrFail({where: {'email': user.email}})
            //create user
            return await this.userRepository.save(user);
        } catch (error) {
            // return error
            return `user with email ${user.email} already exists`
            
        }
    }

    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
    async update(user: User): Promise<UpdateResult> {
        return await this.userRepository.update(user.id, user);
    }
}
