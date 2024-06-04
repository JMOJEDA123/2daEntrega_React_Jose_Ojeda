import "./css/main.css"
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Componentes/header/Header"
import NotFound from "./Componentes/NotFound"
import { ItemListContainer } from "./Componentes/ItemListContainer"
import Footer from "./Componentes/Footer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";




function App() {

  const [numerito, setNumerito] = useState(5);

  return (
    <BrowserRouter>
      <Header numerito={numerito} setNumerito={setNumerito} />
      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
