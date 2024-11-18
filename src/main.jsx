import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes'
import DataContext from './contextprovider/DataContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContext><RouterProvider router={Routes}></RouterProvider></DataContext>
  </StrictMode>,
)
