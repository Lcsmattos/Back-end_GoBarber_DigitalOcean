import AppError from '@shared/errors/AppError';

import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();
    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakeCacheProvider,
    );
  });
  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@user.com',
      password: 'password',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a new account with the same email', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@user.com',
      password: 'password',
    });

    await expect(
      createUser.execute({
        name: 'John Doe',
        email: 'johndoe@user.com',
        password: 'password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
