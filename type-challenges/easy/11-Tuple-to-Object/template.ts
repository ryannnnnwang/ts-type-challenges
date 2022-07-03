type TupleToObject<T extends readonly any[]> = {
	[P in T[number]]: P
}

function ensureArray(input: number | number[]): number[] {
	if (Array.isArray(input)) {
		return input
	} else {
		return [input]
	}
}

interface Foo {
	kind: 'foo'
	diffType: string
	fooOnly: boolean
	shared: number
}

interface Bar {
	kind: 'bar'
	diffType: number
	barOnly: boolean
	shared: number
}

function handle1(input: Foo | Bar) {
	if (input.kind === 'foo') {
		input.fooOnly
	} else {
		input.barOnly
	}
}
