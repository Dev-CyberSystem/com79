export const showToast = (title, icon, position = 'top-end') => {
	Swal.fire({
		toast: true,
		position: position,
		showConfirmButton: false,
		title: title,
		timer: 3000,
		icon: icon,
		timerProgressBar: true,
	})
}
