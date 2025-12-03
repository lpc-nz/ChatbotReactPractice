import './App.css';
import { useState } from 'react';
import ChatInput from './components/ChatInput';
import RenderMessages from './components/RenderMessages';

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: '1',
      message: 'Hello from user',
      sender: 'user',
    },
    {
      id: '2',
      message: 'Hello, how can I help you',
      sender: 'chatbot',
    },
    {
      id: '3',
      message: 'What is weather today?',
      sender: 'user',
    },
  ]);

  return (
    <div className='app-container'>
      <RenderMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}

export default App;
