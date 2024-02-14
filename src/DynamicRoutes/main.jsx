import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/sharedLayout";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import SingleProduct from "./pages/singleProduct";
import Error from "./pages/error";

function Main(){
    return(
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<SharedLayout />} >
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='products' element={<Products />} />
                    <Route path='products/:productId' element={<SingleProduct />} />
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Main;