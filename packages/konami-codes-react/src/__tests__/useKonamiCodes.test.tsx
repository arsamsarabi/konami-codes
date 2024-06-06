import { render } from '../utils/testUtils'
import { useKonamiCodes } from '../useKonamiCodes'
import type { UseKonamiCodesArgs } from '../types'

const TestComponent = ({ codes, options }: UseKonamiCodesArgs) => {
	useKonamiCodes({ codes, options })

	return (
		<>
			<input type="text" className="my-selector" />
		</>
	)
}

describe('useKonamiCodes', () => {
	it('should trigger callback', async () => {
		const cb1 = jest.fn()
		const code1 = ['1', '2', '3', '4', '5']

		const { user } = render(
			<TestComponent codes={[{ code: code1, cb: cb1 }]} />,
			{}
		)

		await user.keyboard('12345')

		expect(cb1).toHaveBeenCalledTimes(1)
	})

	it('should not trigger callback if input is wrong', async () => {
		const cb1 = jest.fn()
		const code1 = ['1', '2', '3', '3', '4', '5']

		const { user } = render(
			<TestComponent codes={[{ code: code1, cb: cb1 }]} />,
			{}
		)

		await user.keyboard('12345')

		expect(cb1).not.toHaveBeenCalled()
	})

	it('should not trigger callback if timeout is reached', async () => {
		const cb1 = jest.fn()
		const code1 = ['1', '2', '3', '4', '5']

		const { user } = render(
			<TestComponent
				codes={[{ code: code1, cb: cb1 }]}
				options={{ delay: 50 }}
			/>,
			{}
		)

		await user.keyboard('1234')
		await new Promise((r) => setTimeout(r, 100))
		await user.keyboard('5')

		expect(cb1).not.toHaveBeenCalled()
	})

	it('should trigger callback using custom el', async () => {
		const cb1 = jest.fn()
		const code1 = ['1', '2', '3', '4', '5']

		const { user, container } = render(
			<TestComponent
				codes={[{ code: code1, cb: cb1 }]}
				options={{
					selector: '.my-selector',
				}}
			/>,
			{}
		)

		const el = container.querySelector('.my-selector') as HTMLElement

		await user.click(el)
		await user.keyboard('12345')

		expect(cb1).toHaveBeenCalledTimes(1)
	})
})
