import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";
import LandingPage from "./views/LandingPage";
import Registro from "./views/Auth/Registro";
import Login from "./views/Auth/Login";
import Feed from "./views/Feed";
import SobreNosotros from "./views/SobreNosotros";
import MisMascotas from "./views/User/MisMascotas";
import MisDatos from "./views/User/MisDatos";
import ReportarMascota from "./views/User/ReportarMascota";

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
                path: '/nosotros',
                element: <SobreNosotros />
            },
            {
                path: '/perdidos',
                element: <Feed />
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: '/auth/registrarse',
                        element: <Registro />
                    },
                    {
                        path: '/auth/login',
                        element: <Login />
                    }
                ]
            },
            {
                path: '/perfil',
                element: <Layout />,
                children: [
                    {
                        path: '/perfil/mis-mascotas',
                        element: <MisMascotas />
                    },
                    {
                        path: '/perfil/mis-datos',
                        element: <MisDatos />
                    },                    {
                        path: '/perfil/reportar-mascota',
                        element: <ReportarMascota />
                    }
                ]
            }
        ]
    },
])

export default router