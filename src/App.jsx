import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Adjust the import path as needed
import Header from "./components/Header";
import Footer from "./components/Footer";
import BussinessIntelligence from "./section/Service/pages/BussinessIntelligence";
import BusinessDevelopment from "./section/Service/pages/BusinessDevelopment";
import ProjectDevelopment from "./section/Service/pages/ProjectManagement";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/pages/Bussiness-intelligence" element={<BussinessIntelligence />} />
        <Route path="/service/pages/Bussiness-development" element={<BusinessDevelopment />} />
        <Route path="/service/pages/Project-management" element={<ProjectDevelopment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
