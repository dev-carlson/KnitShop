import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routers/Home";
import Navbar from "./components/Navbar";
import CareAndRepair from "./routers/CareAndRepair";
import Gallery from "./routers/Gallery";
import Production from "./routers/Production";
import Shop from "./routers/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/CareAndRepair" element={<CareAndRepair />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Production" element={<Production />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
