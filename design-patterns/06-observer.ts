// Observer interface
interface WeatherObserver {
  update(temperature: number): void;
}

// Concrete observers
class PhoneDisplay implements WeatherObserver {
  update(temperature: number): void {
      console.log(`Phone app updated to: ${temperature}°C`);
  }
}

class WindowDisplay implements WeatherObserver {
  update(temperature: number): void {
      console.log(`Window display showing: ${temperature}°C`);
  }
}

class WebsiteDisplay implements WeatherObserver {
  update(temperature: number): void {
      console.log(`Website updated to: ${temperature}°C`);
  }
}

// Subject (Observable)
class WeatherStation {
  private observers: WeatherObserver[] = [];
  private temperature: number = 0;

  addObserver(observer: WeatherObserver): void {
      this.observers.push(observer);
  }

  removeObserver(observer: WeatherObserver): void {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
          this.observers.splice(index, 1);
      }
  }

  setTemperature(temperature: number): void {
      this.temperature = temperature;
      this.notifyObservers();
  }

  private notifyObservers(): void {
      for (const observer of this.observers) {
          observer.update(this.temperature);
      }
  }
}

// Usage
const weatherStation = new WeatherStation();

// Create displays
const phoneDisplay = new PhoneDisplay();
const windowDisplay = new WindowDisplay();
const websiteDisplay = new WebsiteDisplay();

// Add observers
weatherStation.addObserver(phoneDisplay);
weatherStation.addObserver(windowDisplay);
weatherStation.addObserver(websiteDisplay);

// Update temperature
weatherStation.setTemperature(24);
// All displays update to 24°C

// Remove one observer
weatherStation.removeObserver(windowDisplay);

// Update temperature again
weatherStation.setTemperature(27);

// Output:
// Phone app updated to: 27°C
// Website updated to: 27°C