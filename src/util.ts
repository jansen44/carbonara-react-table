export const getNestedValue = (object: Object, key: string) => {
	const keys = key.split('.')

	return keys.reduce((obj: any, key: string) =>
		(obj && obj[key] !== 'undefined')
			? obj[key]
			: undefined
		, object
	)
}

export const isString = (obj: any): obj is string => typeof obj === 'string'

export function getNumberRange(begin: number, final: number) {
	const _final = final + 1

	if (_final <= begin) { return [] }

	const range = _final - begin;
	let current = begin - 1

	return Array(range).fill(0).map(() => {
		current++
		return current
	})
}

export class Debounce {
	private timeout: number | null

	constructor() {
		this.timeout = null
	}

	debounced = (func: Function, wait: number) => {
		this.clear()
		this.timeout = setTimeout(func, wait)
	}

	clear = () => {
		if (!!this.timeout) {
			clearTimeout(this.timeout)
			this.timeout = null
		}
	}
}
