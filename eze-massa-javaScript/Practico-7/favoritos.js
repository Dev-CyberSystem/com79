import { contacts } from './contactos.js'
import { renderContacts } from './renderContacts.js'
import { showToast } from './toast.js'

export let favorites = localStorage.getItem('favs')
	? JSON.parse(localStorage.getItem('favs'))
	: []

export const addFavorite = (id) => {
	let favorite = contacts.find((contact) => contact.id == id)
	let isFavoritePresent = favorites.some((contact) => contact.id == id)
	if (!isFavoritePresent) {
		favorites.push(favorite)
		const favoritesJson = JSON.stringify(favorites)
		localStorage.setItem('favs', favoritesJson)
		showToast('Añadido a favoritos!', 'success')
		renderContacts(contacts)
		return
	}
	Swal.fire({
		title: 'El contacto ya esta en sus favoritos desea quitarlo?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#157347',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Confirmar',
		cancelButtonText: 'Cancelar',
	}).then((result) => {
		if (result.isConfirmed) {
			removeFavorite(id)
		}
		return
	})
}

const removeFavorite = (id) => {
	favorites = favorites.filter((favorite) => favorite.id != id)
	let favoritesJson = JSON.stringify(favorites)
	localStorage.setItem('favs', favoritesJson)
	renderContacts(contacts)
}
