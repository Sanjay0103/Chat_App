import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext';
import { ChatContextProvider } from './Context/ChatContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function

