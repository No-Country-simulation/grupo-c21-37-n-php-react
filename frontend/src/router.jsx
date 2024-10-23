import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import LandingPage from "./views/LandingPage";
import Registro from "./views/Registro";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import SobreNosotros from "./views/SobreNosotros";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/nosotros',
                element: <SobreNosotros />
            },
        ]
    },
    {
        path: '/registrarse',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Registro />
            }
        ]
    },
    
    {
        path: '/login',
        element: <AuthLayout />,
        children: [
        {
            index: true,
            element: <Login />
        }
    ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    }
])


export default router