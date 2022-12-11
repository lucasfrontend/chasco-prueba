
import { useState, createContext } from "react";

export const SdChContext = createContext([])

export const SdChContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        setCartList([...cartList , product])
    }

    return(
        <SdChContext.Provider value={{
            cartList,
            addToCart

        }}>
            { children }
        </SdChContext.Provider>
    )
}
