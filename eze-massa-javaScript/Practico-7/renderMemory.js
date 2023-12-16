import { contacts } from './contactos.js'

const memory = document.querySelector('#memory')

export const showMemory = () => {
	if (memory.querySelector('p')) {
		memory.querySelector('p').remove()
	}
	const memoryParagraph = document.createElement('p')
	memoryParagraph.classList.add('text-light', 'fs-3')
	memory.appendChild(memoryParagraph)
	memoryParagraph.innerText = `${10 - Number(contacts.length)}`
}
