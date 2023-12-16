export class ValidationError extends Error {
	constructor(message,type) {
		super(message)
		this.name = 'ValidationError'
		this.type = type
	}
}
export class MemoryError extends Error {
	constructor(message,type) {
		super(message)
		this.name = 'MemoryError'
		this.type = type
	}
}
