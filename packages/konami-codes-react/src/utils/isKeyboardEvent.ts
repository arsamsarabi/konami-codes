export const isKeyboardEvent = (event: Event): event is KeyboardEvent =>
  "key" in event;
