import { Contact } from './contacto.js'
import { contacts, saveContactsInStorage } from './contactos.js'
import { showToast } from './toast.js'
import { MemoryError, ValidationError } from './validationErrors.js'

const nameInput = document.querySelector('#contactName')
const phoneInput = document.querySelector('#contactPhone')
export const validateData = (name, phone) => {
	if (contactForm.querySelector('#spanError')) {
		contactForm.querySelector('#spanError').remove()
		nameInput.classList.remove('border-2', 'border-danger')
		phoneInput.classList.remove('border-2', 'border-danger')
	}
	const regexName = /^[a-zA-ZáÁéÉíÍóÓúÚüÜñÑ\s]+$/
	const regexPhone =
		/^(\+?54)?(9)?0?(11|2[02389]|3[03478]|23|26|29|343|351|370|376|379|387|388|342|343|345|351|353|358|362|364|370|376|379|381|383|385|387|388|91|93|95|97|98|99)\d{8}$/

	if (!name) throw new ValidationError('El nombre es requerido', 'nameError')
	if (name.length > 50)
		throw new ValidationError(
			'El maximo de caracteres permitidos es 50',
			'nameError'
		)
	if (!phone)
		throw new ValidationError('El telefono es requerido', 'phoneError')
	if (!regexName.test(name))
		throw new ValidationError(
			'El nombre debe contener solo letras y espacios',
			'nameError'
		)
	if (!regexPhone.test(phone))
		throw new ValidationError(
			'Ingrese un telefono en formato valido',
			'phoneError'
		)
	if (
		contacts.find((contact) => contact.name.toLowerCase() == name.toLowerCase())
	) {
		throw new ValidationError(
			'Ya existe un contacto con ese nombre',
			'nameError'
		)
	}
	if (contacts.length > 9) {
		throw new MemoryError('Memoria llena', 'memoryFull')
	}
	let newContact = new Contact(name, phone)
	contacts.push(newContact)
	showToast('Contacto añadido con exito!', 'success')
	contactForm.reset()
	saveContactsInStorage(contacts)
}

export const renderErrors = (error) => {
	const spanError = document.createElement('span')
	spanError.id = 'spanError'
	spanError.classList.add('bg-warning', 'fw-bold', 'px-2')

	if (error.type == 'nameError') {
		nameInput.classList.add('border-2', 'border-danger')
		nameInput.insertAdjacentElement('afterend', spanError)
		spanError.innerText = error.message
	}
	if (error.type == 'phoneError') {
		phoneInput.classList.add('border-2', 'border-danger')
		phoneInput.insertAdjacentElement('afterend', spanError)
		spanError.innerText = error.message
	}
	if (error.type == 'memoryFull') {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: error.message,
		})
	}
}
