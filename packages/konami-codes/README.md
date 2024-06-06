# @arsams/konami-codes

A typescript class that provides Konami codes functionality.

## Installation

```bash
pnpm add @arsams/konami-codes
```

## Usage

```typescript
import { KonamiCodes } from '@arsams/konami-codes'
import type { KCSecretCode, KCConfig } from '@arsams/konami-codes'

const codes: Array<KCSecretCode> = [
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
]

const config: KCConfig = {
	delay: 3000, // ms - Defaults to 3000
	debug: true, // to print logs to the console - Defaults to false
}

const konami = new KonamiCodes(codes, config)

// Successfully triggering a callback looks like this
konami.input('ArrowUp')
konami.input('ArrowDown')
konami.input('ArrowLeft')
konami.input('ArrowRight')
// console.log('Callback 1') runs

// Inputting an unexpected string in the sequence resets the
// attempt and does not run the code
konami.input('a')
konami.input('b')
konami.input('z')
konami.input('c')
// console.log('Callback 2') does NOT run

// Waiting longer that the delay value resets the attempt
// and does not run the code
konami.input('a')
konami.input('b')
setTimeout(() => {}, 3500)
konami.input('c')
// console.log('Callback 2') does NOT run
```

### Usage in React

See [@arsam/konami-codes-react](https://www.npmjs.com/package/@arsams/konami-codes-react) for a react hook that helps with implementing this package into your React app.
