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
            $('.conteudo').css('bottom', '29%');
            toggled = false;
        } else {
            $('#sidebar').css('margin-left', '0vw');
            $('.conteudo').css('bottom', '13%');
            toggled = true;
        }
        
    });
});

function Pop() {
    alert("clicou");
}

function Animated(){
    var element = document.getElementById('sideBar');

    // Add the 'animate' class to trigger the animation
    element.classList.add('animation');

    // Remove the 'animate' class after the animation is complete
    element.addEventListener('animationend', function() {
      element.classList.remove('animation');
    });
}