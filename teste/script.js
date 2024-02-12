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

