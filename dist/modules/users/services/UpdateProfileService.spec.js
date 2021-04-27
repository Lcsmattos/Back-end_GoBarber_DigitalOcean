"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeHashProvider = _interopRequireDefault(require("../providers/HashProvider/fakes/FakeHashProvider"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _UpdateProfileService = _interopRequireDefault(require("./UpdateProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let fakeHashProvider;
let updateProfile;
describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeHashProvider = new _FakeHashProvider.default();
    updateProfile = new _UpdateProfileService.default(fakeUsersRepository, fakeHashProvider);
  });
  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jdoe@example.com',
      password: 'password'
    });
    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'jtre@example.com'
    });
    expect(updatedUser.name).toBe('John Trê');
    expect(updatedUser.email).toBe('jtre@example.com');
  });
  it('should not be able to update profile from non-existing user', async () => {
    expect(updateProfile.execute({
      user_id: 'non-existing user id',
      name: 'Teste',
      email: 'test@example.com'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to change the email to another existing user email', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jdoe@example.com',
      password: 'password'
    });
    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'test@example.com',
      password: 'password'
    });
    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'John Doe',
      email: 'jdoe@example.com'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jdoe@example.com',
      password: 'password'
    });
    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'jtre@example.com',
      old_password: 'password',
      password: '123123'
    });
    expect(updatedUser.password).toBe('123123');
  });
  it('should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jdoe@example.com',
      password: 'password'
    });
    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'jtre@example.com',
      password: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'jdoe@example.com',
      password: 'password'
    });
    await expect(updateProfile.execute({
      user_id: user.id,
      name: 'John Trê',
      email: 'jtre@example.com',
      old_password: 'wrong-old-password',
      password: '123123'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});