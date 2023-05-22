import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './routers/Home';
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import CareAndRepair from './routers/CareAndRepair';
import Gallery from './routers/Gallery';
import Production from './routers/Production';
import Shop from './routers/Shop';
import { ToastContainer } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';

// Import the scroll restoration polyfill
import 'scroll-restoration-polyfill';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Chatbot />
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CareAndRepair" element={<CareAndRepair />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Production" element={<Production />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
