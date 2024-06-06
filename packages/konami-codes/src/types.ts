export type KCSecretCode = {
	code: string[]
	cb: Function
}

export type KCConfig = {
	delay?: number
	debug?: boolean
}

export type TimeoutRef = ReturnType<typeof setTimeout>
