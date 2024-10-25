import { createContext } from "react";

const PetgramContext = createContext();

const PetgramProvider = ({children}) => {
    return (
        <PetgramContext.Provider
        value={{

        }}
        >{children}</PetgramContext.Provider>

    )
}

export {
    PetgramProvider
}

export default PetgramContext