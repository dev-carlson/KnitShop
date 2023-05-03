import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routers/Home";
import ProductPage from "./components/ProductPage"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import CareAndRepair from "./routers/CareAndRepair";
import Gallery from "./routers/Gallery";
import Production from "./routers/Production";
import Shop from "./routers/Shop";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Chatbot />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CareAndRepair" element={<CareAndRepair />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Production" element={<Production />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
