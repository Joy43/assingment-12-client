import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routers/router'
import AuthProviders from './Providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='max-w-screen-xl mx-auto'>
       <AuthProviders>
       <HelmetProvider>
         
            <RouterProvider router={router} />
          
        </HelmetProvider>
       </AuthProviders>
       </div>
  </React.StrictMode>,
)
