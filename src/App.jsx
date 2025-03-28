import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
