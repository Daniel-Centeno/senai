document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessage');
    const messageArea = document.getElementById('messageArea');
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');

    sendMessageButton.addEventListener('click', sendMessage);

    function ePAr(n) {
        return n % 2 == 0;
    }

    i = 0;
    function sendMessage() {
        
        const messageText = messageInput.value.trim();
        document.getElementById("messageInput").focus;
        if (messageText !== '') {
            const messageElement = document.createElement('div');
            const messageChild = document.createElement('div');

            //messageElement.style.backgroundColor = 'green';
            messageElement.classList.add('message-container');

            messageElement.appendChild(messageChild);
            messageChild.classList.add('message');
            
            messageChild.textContent = messageText;
            messageArea.appendChild(messageElement);
            messageInput.value = '';
            messageArea.scrollTop = messageArea.scrollHeight;

            
            i++;
            if (ePAr(i)){
                //trocar esse elemento de "end" para "start" quando a mensagem nn for sua
                messageElement.style.justifyContent = 'end';
            }
            else {
                messageElement.style.justifyContent = 'start';
            }
            
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

