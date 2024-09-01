import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DetailProvider from './Pages/Orders/OrderformSection/DetailContext/DetailProvider.jsx'
import FormContextProvider from './Pages/Orders/OrderformSection/OrderFormContext/FormContextProvider.jsx'

import './index.css'
import UserContextProvider from './Context/UserContextProvider.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
    <DetailProvider><FormContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
      </FormContextProvider></DetailProvider>
    
    
  </React.StrictMode>,
)
