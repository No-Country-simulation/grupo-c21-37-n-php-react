import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const PetgramContext = createContext();

const PetgramProvider = ({children}) => {
    const [mascotas, setMascotas] = useState([])

    const obtenerMascotas = async () => {
        const token = localStorage.getItem('AUTH_TOKEN')
        try {
            const {data} = await clienteAxios('/api/perdidos', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMascotas(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerMascotas();
    }, [])


    return (
        <PetgramContext.Provider
        value={{
            mascotas
        }}
        >{children}</PetgramContext.Provider>

    )
}

export {
    PetgramProvider
}

export default PetgramContext