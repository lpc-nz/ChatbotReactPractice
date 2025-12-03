export function ChatMessage({ message, sender }) {
  return (
    <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
      {sender === 'chatbot' && <img src='./src/assets/chatbot.png' width='50' />}
      <div className='chat-message-text'>{message}</div>
      {sender === 'user' && <img src='./src/assets/user.png' width='50' />}
    </div>
  );
}
