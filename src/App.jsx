import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";
import Conference from "./pages/Conference";
import Ecosystem from "./pages/Ecosystem";
import AddProject from "./pages/AddProject";

import { useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <BrowserRouter>
        <div className="bg-noise" />
        <HeaderNav />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/ecosystem/add" element={<AddProject />} />
            <Route path="/conference" element={<Conference />} />
            <Route path="/hackathon" element={<Navigate to="/conference" replace />} />
          </Routes>
        </main>
        <FooterNav />
      </BrowserRouter>
    </>
  );
}

export default App;
