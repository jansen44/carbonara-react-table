export const getNestedValue = (object: Object, key: string) => {
	const keys = key.split('.')

	return keys.reduce((obj: any, key: string) =>
		(obj && obj[key] !== 'undefined')
			? obj[key]
			: undefined
		, object
	)
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
