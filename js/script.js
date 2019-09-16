$('#years').animateNumber({ number: 20 });

const hamburger = document.querySelector("#hamburger");

function showMenu() {
    const menu = document.querySelector("#dropdownMenu");
    menu.classList.toggle("invisible");
}

hamburger.addEventListener('click', showMenu)