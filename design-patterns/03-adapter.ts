// Third-party payment service interfaces
// (imagine these come from different libraries)
interface IStripePayment {
  makePayment(amount: number, currency: string): void;
}

interface IPayPalPayment {
  sendPayment(sum: number, curr: string): void;
}

// Third-party service implementations
class StripeAPI implements IStripePayment {
  makePayment(amount: number, currency: string): void {
    console.log(`Stripe: Processing $${amount} ${currency}`);
  }
}

class PayPalAPI implements IPayPalPayment {
  sendPayment(sum: number, curr: string): void {
    console.log(`PayPal: Processing $${sum} ${curr}`);
  }
}

// Our app's payment interface
interface IPaymentProcessor {
  processPayment(amount: number, currency: string): void;
}

// Adapters
class StripeAdapter implements IPaymentProcessor {
  constructor(private readonly stripePayment: IStripePayment) {}

  processPayment(amount: number, currency: string): void {
    this.stripePayment.makePayment(amount, currency);
  }
}

class PayPalAdapter implements IPaymentProcessor {
  constructor(private readonly  paypalPayment: IPayPalPayment) {}

  processPayment(amount: number, currency: string): void {
    this.paypalPayment.sendPayment(amount, currency);
  }
}

// Usage
const stripe = new StripeAPI();
const paypal = new PayPalAPI();

const stripeAdapter = new StripeAdapter(stripe);
const paypalAdapter = new PayPalAdapter(paypal);

// Now we can use both payment methods the same way
stripeAdapter.processPayment(100, 'USD');
paypalAdapter.processPayment(50, 'USD');