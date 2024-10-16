import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar Bootstrap JS para el modal y otros componentes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import LandingPage from './views/LandingPage';
import Registro from './components/Registro/Registro'; // Ruta del componente Registro
import Login from './components/Login/Login'; // Ruta del componente Login
import './styles/Styles.css'; // Importa tu archivo de variables globales
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;