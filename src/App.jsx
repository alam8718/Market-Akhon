import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./component/Header/Header";
import SideBar from "./component/Sidebar/SideBar";
import Fotter from "./component/Fotter/Fotter";

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <SideBar />
        <Fotter />
      </BrowserRouter>
    </div>
  );
}

export default App;
