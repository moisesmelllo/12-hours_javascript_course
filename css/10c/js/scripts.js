function toggle(id) {
    const buttonElement = document.getElementById(id);

    if (buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.remove('is-toggled');
    } else {
        buttonElement.classList.add('is-toggled');
    }
}