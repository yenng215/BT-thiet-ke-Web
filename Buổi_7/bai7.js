function toggleMenu(event, menuId) {
    event.preventDefault();
    var Menu = document.getElementById(menuId);
    if (Menu.style.display === 'block') {
        Menu.style.display = 'none';
    } else {
       Menu.style.display = 'block';
    }
}