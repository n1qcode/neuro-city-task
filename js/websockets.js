'use strict'

const btnPost = document.querySelector('.btn-post');


function postGetData() {
    let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
    socket.onopen = function(e) {
        alert("[open] Соединение установлено");
        alert("Отправляем данные на сервер");
        socket.send("Меня зовут N1code");
    };

    socket.onmessage = function(event) {
        alert(`[message] Данные получены с сервера: ${event.data}`);
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
            // например сеть недоступна
            // обычно в этом случае event.code 1006
            alert('[close] Соединение прервано');
        }
    };

    socket.onerror = function(error) {
        alert(`[error] ${error.message}`);
    };
}


btnPost.addEventListener('click', () => {
    postGetData();
});

