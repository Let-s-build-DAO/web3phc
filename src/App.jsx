import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";
import ReConfig from "./pages/ReConfig";
import Ecosystem from "./pages/Ecosystem";
import AddProject from "./pages/AddProject";
import Analytics from "./components/Analytics";

import { useState } from "react";
import Preloader from "./components/Preloader";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <BrowserRouter>
        <Analytics />
        <ScrollToTop />
        <div className="bg-noise" />
        <HeaderNav />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/ecosystem/add" element={<AddProject />} />
            {/* Removed duplicate AddProject route */}
            <Route path="/reconfig" element={<ReConfig />} />
            <Route path="/conference" element={<Navigate to="/reconfig" replace />} />
            <Route path="/hackathon" element={<Navigate to="/conference" replace />} />
          </Routes>
        </main>
        <FooterNav />
        <BackToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
