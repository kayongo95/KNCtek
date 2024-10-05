let myMenu = document.getElementById('nav-links')

function toggleMenu(){
    if(myMenu.style.display === 'none'){
        myMenu.style.display = 'block';
    }
    else{
        myMenu.style.display = 'none';
    }
}