/* eslint-disable no-undef */
document.querySelectorAll("[data-dialog]").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const dialog = document.querySelector("dialog#" + event.target.getAttribute("data-dialog"));
        dialog.showModal();
    });
});
