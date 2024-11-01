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
import MascotaPage from "./views/MascotaPage";

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
                path: 'nosotros',
                element: <SobreNosotros />
            },
            {
                path: 'perdidos',
                element: <Feed />
            },
            {
                path: 'perdidos/:id',
                element: <MascotaPage />
            },
            {
                path: 'perfil',
                children: [
                    {
                        path: 'mis-mascotas',
                        element: <MisMascotas />
                    },
                    {
                        path: 'mis-datos',
                        element: <MisDatos />
                    },
                    {
                        path: 'reportar-mascota',
                        element: <ReportarMascota />
                    }
                ]
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'registrarse',
                element: <Registro />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]);

export default router;
