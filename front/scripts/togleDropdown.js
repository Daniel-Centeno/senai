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
            $('.conteudo').css('bottom', '100%');
            $('#tbutton').css('transform', 'scaleX(1)');
            $('.messages').css('height', '58.5%');
            toggled = false;
        } else {
            $('#sidebar').css('margin-left', '0vw');
            $('.conteudo').css('bottom', '100%');
            $('#tbutton').css('transform', 'scaleX(-1)');
            $('.messages').css('height', '71%');
            toggled = true;
        }
        
    });
});

document.getElementById('tbutton').addEventListener('click', function () {
    const animatedElement = document.querySelector('.menu');
    const animatedElement1 = document.querySelector('.conteudo');
    animatedElement.classList.toggle('toggled');
    animatedElement1.classList.toggle('toggled');
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




document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');
    const messageArea = document.getElementById('messageArea');
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    sendMessageButton.addEventListener('click', sendMessage);

    function sendMessage() {
        event.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = messageText;
            messageArea.appendChild(messageElement);
            messageInput.value = '';
            messageArea.scrollTop = messageArea.scrollHeight;
        }
    }

    //toggleSidebarButton.addEventListener('click', toggleSidebar);

    // function toggleSidebar() {
    //     if (sidebar.style.right === '-200px') {
    //         sidebar.style.right = '0';
    //     } else {
    //         sidebar.style.right = '-200px';
    //     }
    // }
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const container = document.querySelector('.container');

    toggleSidebarButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        container.classList.toggle('active');
    });
});











// ---------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');
    const messageArea = document.getElementById('messageArea');
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    sendMessageButton.addEventListener('click', sendMessage);

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== '') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = messageText;
            messageArea.appendChild(messageElement);
            messageInput.value = '';
            messageArea.scrollTop = messageArea.scrollHeight;
        }
    }

    //toggleSidebarButton.addEventListener('click', toggleSidebar);

    // function toggleSidebar() {
    //     if (sidebar.style.right === '-200px') {
    //         sidebar.style.right = '0';
    //     } else {
    //         sidebar.style.right = '-200px';
    //     }
    // }
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const container = document.querySelector('.container');

    toggleSidebarButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        container.classList.toggle('active');
    });
});

