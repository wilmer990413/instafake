import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {AuthProvider} from './data/userContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <AuthProvider> 
      <App />
    </AuthProvider> 
  </ChakraProvider>,
)
