class EventBus {
  listeners: Record<string, Function[]>;

  constructor() {
    this.listeners = {};
  }

  on(eventName: string, callback: Function) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }

    this.listeners[eventName].push(callback);
  }

  off(eventName: string, callback: Function) {
    if (!this.listeners[eventName]) {
      throw new Error(`Нет события: ${eventName}`);
    }

    this.listeners[eventName] = this.listeners[eventName].filter(
      (listener) => listener !== callback
    );
  }

  emit(eventName: string, ...args: string[]) {
    if (!this.listeners[eventName]) {
      throw new Error(`Нет события: ${eventName}`);
    }

    this.listeners[eventName].forEach(function (listener) {
      listener(...args);
    });
  }
}

export default EventBus;