# Decorator Pattern Hints

## Example Structure
```typescript
interface ITextFormatter {
    format(text: string): string;
}

class TextFormatter implements ITextFormatter {
    format(text: string): string {
        return text;
    }
}

// Create decorator class that implements ITextFormatter...
```

## Expected Usage

```typescript
const simpleFormatter = new TextFormatter();
const uppercaseDecorator = new UppercaseDecorator(simpleFormatter);

console.log(simpleFormatter.format('hello'));     // "hello"
console.log(uppercaseDecorator.format('hello'));  // "HELLO"
```
