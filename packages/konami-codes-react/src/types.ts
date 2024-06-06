import type { KCSecretCode, KCConfig } from '@arsams/konami-codes'

export type UseKonamiCodesArgs = {
	codes: Array<KCSecretCode>
	options?: KCConfig & {
		selector?: string
	}
}
