# Chatbot React Application

A simple, real-time chatbot application built with React 19 and Vite. Users can send messages and receive AI-generated responses using the `supersimpledev` library.

## Features

- **Real-time messaging**: Send messages and get instant responses from the chatbot
- **Auto-scrolling**: Chat container automatically scrolls to the latest message
- **Clean UI**: Simple, intuitive interface with user and chatbot message differentiation
- **Fast development**: Built with Vite for rapid development and hot module replacement

## Project Structure

```
src/
├── App.jsx                 # Main app component (state management)
├── App.css                 # Application styles
├── main.jsx                # React entry point
├── index.css               # Global styles
├── assets/                 # Images (user.png, chatbot.png)
└── components/
    ├── ChatInput.jsx       # Message input and send button
    ├── ChatMessage.jsx     # Individual message display
    └── RenderMessages.jsx  # Message list with auto-scroll
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chatbot
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Technologies Used

- **React 19**: UI framework with latest concurrent features
- **Vite**: Lightning-fast build tool and dev server
- **supersimpledev**: AI chatbot response library
- **ESLint**: Code quality checking

## Development Notes

- No build configuration needed for JSX - Vite handles it automatically
- All components use `.jsx` extension
- State management uses simple prop drilling (no Context API)
- Auto-scroll uses `useRef` and `useEffect` hooks
- No error handling for chatbot API currently implemented

## License

This project is part of learning React fundamentals.

