import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

const queryCliet=new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryCliet}>
     <App />
    </QueryClientProvider>
    
  </StrictMode>,
)
