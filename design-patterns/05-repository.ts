interface IUser {
  id: number;
  name: string;
  email: string;
}

// Repository interface with core methods
interface IUserRepository {
  create(user: Omit<IUser, 'id'>): Promise<IUser>;
  getById(id: number): Promise<IUser | null>;
  update(id: number, user: Partial<IUser>): Promise<IUser | null>;
}

// MySQL Implementation
class MySQLUserRepository implements IUserRepository {
  private users: IUser[] = []; // Simulating database

  async create(userData: Omit<IUser, 'id'>): Promise<IUser> {
    const newUser = {
        id: this.users.length + 1,
        ...userData
    };

    this.users.push(newUser);

    return newUser;
  }

  async getById(id: number): Promise<IUser | null> {
    return this.users.find(user => user.id === id) || null;
  }

  async update(id: number, userData: Partial<IUser>): Promise<IUser | null> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      return null;
    }

    this.users[index] = { ...this.users[index], ...userData };

    return this.users[index];
  }
}

// Usage
async function main() {
  const userRepo = new MySQLUserRepository();

  const user = await userRepo.create({
      name: "John",
      email: "john@example.com"
  });
  console.log('Created User:', user);

  const userById = await userRepo.getById(1);
  console.log('User By ID:', userById);

  const updatedUser = await userRepo.update(1, { name: "John Doe", email: "john.doe@example.com" });
  console.log('Updated User:', updatedUser);

  const userByIdAgain = await userRepo.getById(1);
  console.log('User By ID Again:', userByIdAgain);
}

main();