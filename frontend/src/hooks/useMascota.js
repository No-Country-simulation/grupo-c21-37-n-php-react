import { useContext } from "react";
import clienteAxios from "../config/axios";
import PetgramContext from "../context/PetgramProvider";

export const useMascota = () => {
  const { setMascotas } = useContext(PetgramContext);

  const registrarMascota = async (datos, setErrores) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    console.log(datos)
    try {
      const { data } = await clienteAxios.post('/api/reportar-mascota', datos, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      setErrores([]);
      console.log(data);
      
      // Actualizar las mascotas (si es necesario en tu lógica)
      // setMascotas(prevMascotas => [...prevMascotas, data]);
      
    } catch (error) {
      console.log(error);
        setErrores(["Ocurrió un error al registrar la mascota."]);
      }
  };

  return { registrarMascota };
};
