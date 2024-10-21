import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar Bootstrap JS para el modal y otros componentes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import LandingPage from './views/LandingPage';
import Registro from './components/Registro/Registro'; // Ruta del componente Registro
import Login from './components/Login/Login'; // Ruta del componente Login
import Dashboard from './views/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;