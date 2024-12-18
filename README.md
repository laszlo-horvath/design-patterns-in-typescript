# TypeScript Design Patterns Examples

This repository contains practical examples of common design patterns implemented in TypeScript. Each example is designed to be simple, understandable, and relevant to real-world web development scenarios.

## Getting Started

1. Clone the repository
2. Install dependencies

```bash
  npm install
```

3. Run any pattern example using the npm scripts

```bash
  npm run design-pattern:<pattern-name>
```

## Available Patterns

### 1. Factory Pattern
Demonstrates object creation through a notification system, showing how to create different types of notifications (email, SMS, push) using a common interface.

```bash
  npm run design-pattern:factory
```

### 2. Singleton Pattern
Shows how to ensure a single instance of a database connection is shared across the application.

```bash
  npm run design-pattern:singleton
```

### 3. Adapter Pattern
Illustrates how to make incompatible interfaces work together using payment provider integration as an example.

```bash
  npm run design-pattern:adapter
```

### 4. Decorator Pattern
Demonstrates how to add new behaviors to objects dynamically using logging and performance measurement examples.

```bash
  npm run design-pattern:decorator
```

### 5. Repository Pattern
Shows how to abstract data access logic using a simple user management system.

```bash
  npm run design-pattern:repository
```