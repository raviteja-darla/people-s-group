document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (e) {
    // Disable F12
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.code === "KeyI") {
        e.preventDefault();
    }

    // Disable Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.code === "KeyC") {
        e.preventDefault();
    }

    // Disable Ctrl+U (view source)
    if (e.ctrlKey && e.code === "KeyU") {
        e.preventDefault();
    }
});

// Menu Button Function
let menu_btn = document.getElementById('menu_btn');
let menu_container = document.getElementById('menu_container');
menu_btn.addEventListener('click', () => {
    menu_container.classList.toggle('menu_open');
    menu_container.classList.toggle('menu_close');
    
})

