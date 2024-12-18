# Repository Pattern Hints

## Example Structure
```typescript
interface Todo {
    id: number;
    text: string;
}

interface ITodoRepository {
    save(todo: Omit<Todo, 'id'>): Todo;
    getById(id: number): Todo | null;
}

// Create repository implementation...
```

## Expected Usage

```typescript
const todoRepo = new TodoRepository();

const todo = todoRepo.save({ text: 'Learn TypeScript' });
console.log(todo);  // { id: 1, text: 'Learn TypeScript' }

const found = todoRepo.getById(1);
console.log(found); // { id: 1, text: 'Learn TypeScript' }
```
