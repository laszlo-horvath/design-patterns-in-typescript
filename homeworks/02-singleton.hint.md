# Singleton Pattern Hints

## Example Structure
```typescript
class ConfigManager {
    private static instance: ConfigManager;
    private settings: { [key: string]: any } = {};

    private constructor() {}

    // Add getInstance method...
    // Add getConfig and setConfig methods...
}
```

## Expected Usage
```typescript
const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

config1.setConfig('apiUrl', 'https://api.example.com');
console.log(config2.getConfig('apiUrl')); // Should show same apiUrl

console.log(config1 === config2); // Should be true
```
