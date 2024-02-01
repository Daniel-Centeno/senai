function toggleDropdown() {
     var dropdown = document.querySelector('.dropdown');
     dropdown.classList.toggle('active');
 }

// function showSideBar() {
//     document.getElementById('tbutton').style.marginLeft = '40%';
// }

// Side bar button logic
let toggled = true;
$(document).ready(function() {
    $('#tbutton').on('click', function() {
        if (toggled) {
            $('#sidebar').css('margin-left', '-20vw');
            toggled = false;
        } else {
            $('#sidebar').css('margin-left', '0vw');
            toggled = true;
        }
        
    });
});