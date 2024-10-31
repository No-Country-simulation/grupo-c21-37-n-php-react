import { useContext } from "react";
import clienteAxios from "../config/axios";
import PetgramContext from "../context/PetgramProvider";

export const useMascota = () => {
  // const { setMascotas } = useContext(PetgramContext);

  const registrarMascota = async (formData, setErrores) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    
  //   for (let [key, value] of formData.entries()) {
  //     console.log(`${key}: ${value}`);
  // }
    try {
      const { data } = await clienteAxios.post('/api/reportar-mascota', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        }
      });
      
      setErrores([]);      
    } catch (error) {
      console.log(error);
        setErrores(["Ocurrió un error al registrar la mascota."]);
      }
  };

    return { registrarMascota };
};