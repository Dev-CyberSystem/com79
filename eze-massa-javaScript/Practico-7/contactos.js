export let contacts = localStorage.getItem('contacts')
	? JSON.parse(localStorage.getItem('contacts'))
	: []

export const modifyContacts = (list) => {
	contacts = list
	saveContactsInStorage(list)
}

export const saveContactsInStorage = (contactsList) => {
	const contactsJson = JSON.stringify(contactsList)
	localStorage.setItem('contacts', contactsJson)
}
