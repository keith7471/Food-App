import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";

export const StoreContext = createContext(null);    //create a context and export it

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});

    const addCartItem = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev, [itemId]:1}))
        }

        else{
            setCartItems( (prev) => ({...prev, [itemId]:prev[itemId]+1}) )
        }
    };

    const removeCartItem = (itemId) =>{
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] - 1 }))
    }

    useEffect(() =>{
        console.log(cartItems)
        ,[cartItems]
    })

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addCartItem,
        removeCartItem
    }


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;

