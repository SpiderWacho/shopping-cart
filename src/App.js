import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import { useContext, useState } from "react";
import { ProductsContext } from "./context/ProductsContext";
import { CartContext } from "./context/CartContext";
import Details from "./components/Details"
import Homepage from "./components/Homepage";


const RouteSwitch = () => {
  
  const initialProducts = useContext(ProductsContext)
  const [products, setProducts] = useState(initialProducts)
  
  const activeCart = useContext(CartContext);
  const [cart, setCart] = useState(activeCart);
  return (
    <ProductsContext.Provider value={{products, setProducts}} >
      <CartContext.Provider value={{cart, setCart}}>
      <BrowserRouter>
        <Routes>
          <Route path="/shopping-cart" element={<Homepage />} />
          <Route path="/shopping-cart/store" element={<Store />} />
          <Route path="/shopping-cart/store/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};

export default RouteSwitch;