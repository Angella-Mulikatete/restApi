import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Angella',
      email: 'angella@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Angie',
      email: 'Angie@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Ella',
      email: 'ella@gmail.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Angella',
      email: 'angella@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Angellina',
      email: 'angellina@gmail.com',
      role: 'ADMIN',
    },
  ];
  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
  }) {
    const usersByHighetstId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighetstId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }
}
