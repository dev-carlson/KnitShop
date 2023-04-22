import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routers/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CareAndRepair from "./routers/CareAndRepair";
import Gallery from "./routers/Gallery";
import Production from "./routers/Production";
import Shop from "./routers/Shop";
import TermsAndCondition from "./routers/TermsAndCondition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CareAndRepair" element={<CareAndRepair />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Production" element={<Production />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
