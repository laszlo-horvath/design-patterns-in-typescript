# Factory Pattern Hints

## Example Structure
```typescript
interface Logger {
   log(message: string): void;
}

class ConsoleLogger implements Logger {
   log(message: string): void {
       console.log(`Console: ${message}`);
   }
}

// Create FileLogger and LoggerFactory...
```

## Expected Usage

```typescript
const factory = new LoggerFactory();
const consoleLogger = factory.createLogger('console');
const fileLogger = factory.createLogger('file');

consoleLogger.log('Hello from console');  // Console: Hello from console
fileLogger.log('Hello from file');        // File: Hello from file
```
