import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FooterNav from "./components/FooterNav";
import Hackathon from "./pages/Hackathon";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hackathon" element={<Hackathon />}></Route>
      </Routes>
      <FooterNav />
    </BrowserRouter>
  );
}

export default App;
