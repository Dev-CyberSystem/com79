export class Contact {
	static id = 0
	constructor(name, phone) {
		this.name = name
		this.phone = phone
		Contact.id = Math.floor(Math.random() * Date.now())
		this.id = Contact.id
	}
}
