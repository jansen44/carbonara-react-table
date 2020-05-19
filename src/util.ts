export const getNestedValue = (object: Object, key: string) => {
	const keys = key.split('.')

	return keys.reduce((obj: any, key: string) =>
		(obj && obj[key] !== 'undefined')
			? obj[key]
			: undefined
		, object
	)
}
