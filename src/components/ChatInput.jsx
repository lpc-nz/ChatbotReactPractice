import { useState } from 'react';
import { Chatbot } from 'supersimpledev';

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    var newChatMessages = [...chatMessages, { message: inputText, sender: 'user', id: crypto.randomUUID() }];

    setChatMessages(newChatMessages);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([...newChatMessages, { message: response, sender: 'chatbot', id: crypto.randomUUID() }]);
    setInputText('');
  }
  return (
    <div className='chat-input-container'>
      <input
        className='chat-input'
        onChange={saveInputText}
        value={inputText}
        id='input'
        placeholder='Send message to chatbot'
        size='30'
      />
      <button className='send-button' onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
