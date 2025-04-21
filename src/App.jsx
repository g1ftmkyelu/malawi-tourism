import PillarPage from "./PillarPage";
import BlogPost from "./BlogPost";
import Products from "./Products";
import Product from "./Product";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PillarPage />} />
        <Route path="/blog" element={<BlogPost />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
 
    </>
  );
}

export default App;
