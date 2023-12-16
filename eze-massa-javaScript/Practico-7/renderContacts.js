import { favorites } from './favoritos.js'
const contactsTable = document.querySelector('#contactsTable')

export const renderContacts = (contactsList) => {
	contactsTable.innerHTML = ''
	contactsList.forEach((contact) => {
		let isFavorite = favorites.some((favorite) => favorite.id == contact.id)
		contactsTable.innerHTML += `
			<tr data-id="${contact.id}" class="table-dark">
			<th scope="row">${contact.id}</th>
			<td>${contact.name}</td>
			<td>${contact.phone}</td>
			<td class="p-0 ">
						<i data-btn="fav" title="agragar a favoritos" class="${
							isFavorite
								? 'bi bi-star-fill btn text-warning fs-4'
								: 'bi bi-star btn text-warning fs-4'
						}"></i>
						<i data-btn="delete" title="borrar contacto" class="bi bi-x-circle-fill btn text-danger fs-4"></i>
					</td>
			</tr>`
	})
}
