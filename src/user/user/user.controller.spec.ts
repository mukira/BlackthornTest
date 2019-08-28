import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { DatabaseModule } from '../../db/database.module';
import { userProviders } from './user.provider';
import { UserService } from './user.service';

describe('User Controller', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...userProviders,
        UserService,
      ],
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  },30000);
});
