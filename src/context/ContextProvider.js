import React, { createContext } from "react";
import { Product } from "../constant/Constant";

export const ContextData = createContext(null);
const ContextProvider = (props) => {
    const  products = {Product}
  return (
    <div>        
        <ContextData.Provider value={{products}}>
            {props.children}
        </ContextData.Provider>
    </div>
  )
}

export default ContextProvider