import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CompanyRegister from "./pages/CompanyRegister";
import CompanyVerify from "./pages/CompanyVerify";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company-register" element={<CompanyRegister />} />
        <Route path="/company-verify" element={<CompanyVerify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;