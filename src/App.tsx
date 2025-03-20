import { Routes, Route } from "react-router-dom";
import CompanyInfoPage1 from "@/pages/companyInfo/CompanyInfoPage1";
import LandingPage from "@/pages/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/company-info/step1" element={<CompanyInfoPage1 />} />
    </Routes>
  );
};

export default App;
