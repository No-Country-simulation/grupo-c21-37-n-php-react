import { useContext } from "react";
import PetgramContext from "../context/PetgramProvider";

const usePetgram = () => {
    return useContext(PetgramContext)
}

export default usePetgram