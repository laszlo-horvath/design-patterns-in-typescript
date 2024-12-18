class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private connected: boolean = false;

  // Private constructor prevents direct instantiation
  private constructor() {}

  // The only way to get the instance
  public static getInstance(): DatabaseConnection {
      // Create instance if it doesn't exist
      if (!DatabaseConnection.instance) {
          DatabaseConnection.instance = new DatabaseConnection();
      }

      return DatabaseConnection.instance;
  }

  // Example methods
  public connect(): void {
      if (!this.connected) {
          console.log('Connecting to database...');
          this.connected = true;
      } else {
          console.log('Already connected!');
      }
  }

  public query(sql: string): void {
      if (this.connected) {
          console.log(`Executing query: ${sql}`);
      } else {
          throw new Error('Must connect first!');
      }
  }
}

// Usage example

// Please note: You cannot do this: const db = new DatabaseConnection();

// This is how we get the instance:
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

// Both variables reference the same instance
console.log(db1 === db2); // true

// Using the singleton
db1.connect();           // "Connecting to database..."
db2.connect();           // "Already connected!"

db1.query('SELECT * FROM users');  // "Executing query: SELECT * FROM users"