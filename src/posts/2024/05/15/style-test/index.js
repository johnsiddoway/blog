document.querySelectorAll('[data-modal]').forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		const dialog = document.querySelector('dialog#' + event.target.getAttribute('data-modal'));
		dialog.showModal();
	});
});