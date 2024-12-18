interface INotification {
  send(message: string): void;
}

class EmailNotification implements INotification {
  send(message: string): void {
      console.log(`Sending email: ${message}`);
  }
}

class SMSNotification implements INotification {
  send(message: string): void {
      console.log(`Sending SMS: ${message}`);
  }
}

class PushNotification implements INotification {
  send(message: string): void {
      console.log(`Sending push notification: ${message}`);
  }
}

// Factory class definition
class NotificationFactory {
  createNotification(channel: 'email' | 'sms' | 'push'): INotification {
      switch (channel) {
          case 'email':
              return new EmailNotification();
          case 'sms':
              return new SMSNotification();
          case 'push':
              return new PushNotification();
          default:
              throw new Error('Notification type not supported');
      }
  }
}

// Factory usage
const factory = new NotificationFactory();

// Create different types of notifications
const emailNotification = factory.createNotification('email');
const smsNotification = factory.createNotification('sms');
const pushNotification = factory.createNotification('push');

// Use them the same way

// Sending email
emailNotification.send('Your order was processed');

// Sending SMS
smsNotification.send('Your package was delivered');

// Sending push notification
pushNotification.send('New message received');