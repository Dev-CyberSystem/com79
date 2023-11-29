let cart = []
let ids = 0
let title = document.createElement('h1')
loadTitle()

const productsList = document.getElementById('productsList')
productsList.addEventListener('click', (e) => {
	if (e.target && e.target.innerText == 'Eliminar') {
		const id = e.target.parentNode.id
		deleteProduct(id)
		loadTitle()
	}
})

loadProducts()

const addProductForm = document.getElementById('addProductForm')
addProductForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const {newProduct} = e.target
	addProduct(newProduct.value.trim(), cart)
	addProductForm.reset()
	loadProducts()
	loadTitle()
})

const searchProductForm = document.getElementById('searchProductForm')
searchProductForm.addEventListener('submit', (e) => {
	e.preventDefault()
	let {keyToSearch} = e.target
	searchProduct(keyToSearch.value.trim(), cart)
	searchProductForm.reset()
})

function searchProduct(productName, list) {
	if (productName.length < 1) {
		alert('El campo no puede estar vacio')
		return
	}
	const isResult = searchProductForm.querySelector('#resultText')

	let resultText = `Los elementos que contienen con ${productName} son: `
	const resultElement = document.createElement('p')
	resultElement.id = 'resultText'

	let result = list.filter((product) => {
		let found = Object.values(product)[1].includes(productName)
		return found
	})
	if (result.length < 1) {
		resultText = 'No se encontraron resultados'
	}
	result.forEach((product) => (resultText += `|${product.name}| `))
	searchProductForm.appendChild(resultElement)
	if (isResult !== null) {
		isResult.innerHTML = resultText
		return
	}
	resultElement.innerHTML = resultText
	searchProductForm.insertBefore(resultElement, searchProductForm.children[3])
}

function loadTitle() {
	const productTitle = cart.length == 1 ? 'producto' : 'productos'
	title.innerText = `Usted tiene ${cart.length} ${productTitle}`
	document.body.insertAdjacentElement('afterbegin', title)
}

function loadProducts() {
	let item = ''
	cart.forEach((product) => {
		item += `
		<li id='${product.id}'>
		${product.name} 
		<button>Eliminar</button>
		</li>`
	})
	productsList.innerHTML = item
}

function addProduct(productName, list) {
	if (productName.length < 1) {
		alert('el campo no puede estar vacio')
		return
	}
	let newProduct = {
		id: ids,
		name: productName,
	}
	list.push(newProduct)
	ids++
}

function deleteProduct(id) {
	cart = cart.filter((product) => product.id != id)
	loadProducts()
}
