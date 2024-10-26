import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Suspense } from "react";
import './index.css'
import { ChatProvider } from './hooks/useChat'
import Loading from "./interface/Loading";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatProvider>
    <Suspense fallback={<Loading />}>
      <App />
      </Suspense>
    </ChatProvider>
  </React.StrictMode>,
)
