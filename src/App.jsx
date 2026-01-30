import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";
import Conference from "./pages/Conference";

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/hackathon" element={<Navigate to="/conference" replace />} />
        </Routes>
      </main>
      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
