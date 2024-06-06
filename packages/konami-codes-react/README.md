# @arsams/konami-codes-react

A React hook that implements `@arsams/konami-codes` to provide Konami codes functionality.

## Installation

```bash
pnpm add @arsams/konami-codes-react
```

## Usage

```typescript
import { useKonamiCodes } from '@arsams/konami-codes-react'

export const MyAwesomeReactComponent = () => {
  useKonamiCodes({
    codes: [
      {
        code: ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
        cb: () => {
          console.log('Callback 1')
        },
      },
      {
        code: ['a', 'b', 'c'],
        cb: () => {
          console.log('Callback 2')
        },
      },
    ],
    options: {
      // ms - Defaults to 3000
      delay: 3000,
      // to print logs to the console - Defaults to false
      debug: true,
      // the selector that the event listener is attached to
      // - Defaults to the document
      selector: '#secret-input-field'
    }
  })

  return (
    <>
      ...
    </>
  );
}
```

> This hook then listens to keyboard inputs and uses `@arsams/konami-codes`
> package to validate input sequence and trigger the callbacks.

For example:

This successfully triggers a callback:

- User presses 'ArrowUp'
- User presses 'ArrowDown'
- User presses 'ArrowLeft'
- User presses 'ArrowRight'
- console.log('Callback 1') runs

Inputting an unexpected string in the sequence resets the attempt and does not run the code:

- User presses 'a'
- User presses 'b'
- User presses 'z'
- User presses 'c'
- console.log('Callback 2') does NOT run

Waiting longer that the delay value resets the attempt and does not run the code:

- User presses 'a'
- User presses 'b'
- User waits longer than the configured value of the `delay` option
- User presses 'c'
- console.log('Callback 2') does NOT run

### @arsams/konami-codes

for documentation see the [@arsams/konami-codes](https://www.npmjs.com/package/@arsams/konami-codes) npm page
