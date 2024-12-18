# Observer Pattern Hints

## Example Structure
```typescript
interface NewsSubscriber {
    update(news: string): void;
}

class NewsAgency {
    private subscribers: NewsSubscriber[] = [];

    // Add methods for subscribe, unsubscribe, and publishNews...
}

// Create different subscriber classes that implement NewsSubscriber...
```

## Expected Usage

```typescript
const newsAgency = new NewsAgency();
const emailSubscriber = new EmailSubscriber();
const appSubscriber = new AppSubscriber();

newsAgency.subscribe(emailSubscriber);
newsAgency.subscribe(appSubscriber);

newsAgency.publishNews("TypeScript 5.0 is released!");
// Output:
// Sending email: TypeScript 5.0 is released!
// Showing in app: TypeScript 5.0 is released!

newsAgency.unsubscribe(emailSubscriber);
newsAgency.publishNews("New features announced!");
// Output:
// Showing in app: New features announced!
```
