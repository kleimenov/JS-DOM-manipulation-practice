
var template = document.querySelector('#message-template').content;

var newMessageTemplate = template.querySelector('.chat-message')

var chatContainer = document.querySelector('.chat-content');

var messages = chatContainer.children;

var messageForm = document.querySelector('.chat-form');

var input = messageForm.querySelector('.chat-form-input');


messageForm.addEventListener('submit', function(evt){
  evt.preventDefault(evt);
  var text = input.value;
  
  var newTemplate = newMessageTemplate.cloneNode(true);
  
  newTemplate.children[1].textContent = text;
  
  chatContainer.appendChild(newTemplate);
  
  deleteMessageHandler(newTemplate);
  
  input.value = '';

})


var deleteMessageHandler = function (message) {
  var crossSign = message.querySelector('.chat-message-button');
  crossSign.addEventListener('click', function () {
  message.remove(); 
  });    
}


for (var i = 0;i < messages.length;i++) {
  deleteMessageHandler(messages[i]);  
}






