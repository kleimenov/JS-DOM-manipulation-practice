
let template = document.querySelector('#message-template').content;

let newMessageTemplate = template.querySelector('.chat-message')

let chatContainer = document.querySelector('.chat-content');

let messages = chatContainer.children;

let messageForm = document.querySelector('.chat-form');

let input = messageForm.querySelector('.chat-form-input');


messageForm.addEventListener('submit', function(evt){
  evt.preventDefault(evt);
  let text = input.value;
  
  let newTemplate = newMessageTemplate.cloneNode(true);
  
  newTemplate.children[1].textContent = text;
  
  chatContainer.appendChild(newTemplate);
  
  deleteMessageHandler(newTemplate);
  
  input.value = '';

})


let deleteMessageHandler = function (message) {
  let crossSign = message.querySelector('.chat-message-button');
  crossSign.addEventListener('click', function () {
  message.remove(); 
  });    
}


for (let i = 0;i < messages.length;i++) {
  deleteMessageHandler(messages[i]);  
}






