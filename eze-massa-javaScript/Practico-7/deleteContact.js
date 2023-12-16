import { contacts, modifyContacts } from './contactos.js'
import { renderContacts } from './renderContacts.js'
import { showMemory } from './renderMemory.js'
import { showToast } from './toast.js'
export const deleteContact = (id) => {
	Swal.fire({
		title: 'Esta seguro que desea eliminar el contacto?',
		text: 'Esta accion no se puede revertir!',
		icon: 'question',
		showCancelButton: true,
		confirmButtonColor: '#157347',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Confirmar',
		cancelButtonText: 'Cancelar',
	}).then((result) => {
		if (result.isConfirmed) {
			let updateContacts = contacts.filter((contact) => contact.id != id)
			modifyContacts(updateContacts)
			renderContacts(contacts)
			showMemory()
			showToast('Contacto eliminado', 'info')
		}
		return
	})
}
