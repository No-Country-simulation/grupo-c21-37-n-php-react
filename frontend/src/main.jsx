import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { PetgramProvider } from "../src/context/PetgramProvider";
import router from './router';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Asegúrate de tener Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PetgramProvider>
    <RouterProvider router={router} />
    </PetgramProvider>
  </React.StrictMode>,
)
