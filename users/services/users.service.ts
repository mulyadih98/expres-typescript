import UserDao from "../daos/users.dao";
import { CRUD } from "../../common/crud.interface";
import { CreateUserDto } from "../dto/create.user.dto";
import { PutUserDto } from "../dto/put.user.dto";
import { PatchUserDto } from "../dto/patch.user.dto";

class UserService implements CRUD {
  async create(resource: CreateUserDto) {
    return UserDao.addUser(resource);
  }

  async deleteById(id: string) {
    return UserDao.removeUserById(id);
  }

  async list(limit: number, page: number) {
    return UserDao.getUsers();
  }

  async patchById(id: string, resource: PatchUserDto) {
    return UserDao.patchUserById(id, resource);
  }

  async readById(id: string) {
    return UserDao.getUserById(id);
  }

  async putById(id: string, resource: PutUserDto) {
    return UserDao.putuserById(id, resource);
  }

  async getUserByEmail(email: string) {
    return UserDao.getUserByEmail(email);
  }
}

export default new UserService();
