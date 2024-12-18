// Base interface
interface IUserService {
  getUser(id: number): Promise<string>;
}

// Basic implementation
class UserService implements IUserService {
  async getUser(id: number): Promise<string> {
    // Random delay between 100ms and 1000ms
    const delay = Math.random() * 900 + 100;
    await new Promise(resolve => setTimeout(resolve, delay));
    return `User data for id: ${id}`;
  }
}

// Decorator base class
class UserServiceDecorator implements IUserService {
  constructor(protected userService: IUserService) {}

  async getUser(id: number): Promise<string> {
    return this.userService.getUser(id);
  }
}

// Specific decorators
class LoggerDecorator extends UserServiceDecorator {
  async getUser(id: number): Promise<string> {
    console.log(`Logging: Getting user ${id}`);
    const result = await super.getUser(id);
    console.log(`Logging: Completed getting user ${id}`);
    return result;
  }
}

class PerformanceDecorator extends UserServiceDecorator {
  async getUser(id: number): Promise<string> {
    const start = Date.now();
    const result = await super.getUser(id);
    const end = Date.now();
    console.log(`Performance: Method took ${end - start}ms`);
    return result;
  }
}

async function start() {
  // Usage
  // Basic service
  const userService = new UserService();
  console.log(await userService.getUser(1));
  // Output: "User data for id: 1"

  // With logging
  const loggedService = new LoggerDecorator(userService);
  console.log(await loggedService.getUser(2));

  // With both logging and performance
  const fullService = new PerformanceDecorator(new LoggerDecorator(userService));
  console.log(await fullService.getUser(3));
}

start();