# Adapter Pattern Hints

## Example Structure
```typescript
class MathOperations {
    add(a: number, b: number): number {
        return a + b;
    }
}

interface Calculator {
    calculate(a: number, b: number): number;
}

// Create adapter to make MathOperations work with Calculator interface...
```

## Expected Usage

```typescript
const mathOps = new MathOperations();
const adapter = new MathAdapter(mathOps);

// Should work the same way
console.log(mathOps.add(5, 3));         // 8
console.log(adapter.calculate(5, 3));   // 8
```
