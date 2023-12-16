// Tarea

// ○ Nos piden realizar una agenda telefónica de contactos.
// ○ Un contacto está definido por un nombre y un teléfono. Se considera que un
// contacto es igual a otro cuando sus nombres son iguales.  🆗
// ○ Una agenda de contactos está formada por un conjunto de contactos. Se
// podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño
// por defecto (10).🆗
// ○ Las funciones serán:
// ■ aniadirContacto(Contacto): Añade un contacto a la agenda, sino la
// agenda no puede almacenar mas contactos indicar por pantalla.🆗
// ■ existeContacto(Conctacto): indica si el contacto pasado existe o no. 🔁
// ■ listarContactos(): Lista toda la agenda 🆗
// ■ buscarContacto(nombre): busca un contacto por su nombre y muestra
// su teléfono. 🆗
// ■ eliminarContacto(Contacto): elimina el contacto de la agenda, indica
// si se ha eliminado o no por pantalla 🆗
// ■ agendaLlena(): indica si la agenda está llena. 🔁
// ■ huecosLibres(): indica cuántos contactos más podemos ingresar. 🆗
// ○ Usar LocalStorage para guardar la info de la agenda y para consultar sus
// datos 🆗
import { contacts, modifyContacts } from './contactos.js'
import { deleteContact } from './deleteContact.js'
import { addFavorite } from './favoritos.js'
import { renderContacts } from './renderContacts.js'
import { showMemory } from './renderMemory.js'
import { renderErrors, validateData } from './validation.js'

const contactForm = document.querySelector('#contactForm')
const contactTable = document.querySelector('.table')
const sortName = document.getElementById('sortByName')
const filterContactsInput = document.querySelector('#filterContactsInput')

document.addEventListener('DOMContentLoaded', () => {
	showMemory()
	renderContacts(contacts)
	sortByName('↓')
})

contactForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const { contactName, contactPhone } = e.target
	try {
		validateData(contactName.value.trim(), contactPhone.value.trim())
	} catch (error) {
		renderErrors(error)
	} finally {
		showMemory()
		renderContacts(contacts)
	}
})

filterContactsInput.addEventListener('keyup', (e) => {
	let keyToSearch = e.target.value
	const results = contacts.filter((contact) => {
		if (
			String(contact.id).includes(keyToSearch) ||
			contact.name.includes(keyToSearch) ||
			contact.phone.includes(keyToSearch)
		) {
			return contact
		}
	})
	renderContacts(results)
})

contactTable.addEventListener('click', (e) => {
	if (e.target.matches('i')) {
		const contactId = e.target.parentElement.parentElement.dataset.id
		if (e.target.dataset.btn == 'delete') {
			deleteContact(contactId)
		}
		if (e.target.dataset.btn == 'fav') {
			addFavorite(contactId)
		}
	}
})

sortName.addEventListener('click', (e) => {
	sortByName(e.target.dataset.sort)
})

const sortByName = (reference) => {
	if (reference == '↑') {
		sortName.textContent = '↓'
		let sortedContacts = contacts.sort((a, b) =>
			a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
		)
		modifyContacts(sortedContacts)
		setTimeout(() => {
			sortName.dataset.sort = '↓'
		}, 500)
	}
	if (reference == '↓') {
		sortName.textContent = '↑'
		let sortedContacts = contacts.sort((a, b) =>
			a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
		)
		modifyContacts(sortedContacts)
		setTimeout(() => {
			sortName.dataset.sort = '↑'
		}, 500)
	}
	renderContacts(contacts)
}
