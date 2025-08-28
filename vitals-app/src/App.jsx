import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessLogin from "./pages/BusinessLogin";
import AdminLogin from "./pages/AdminLogin";
import AdminPortal from "./pages/AdminPortal";
import BusinessPortal from "./pages/BusinessPortal";
import IndustrySelection from "./components/Onboarding/IndustrySelection";
import Quiz from "./components/Onboarding/Quiz";
import NextSteps from "./components/Onboarding/NextSteps";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-login" element={<BusinessLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-portal"
          element={
            <ProtectedRoute role="admin">
              <AdminPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/business-portal"
          element={
            <ProtectedRoute role="business">
              <BusinessPortal />
            </ProtectedRoute>
          }
        />
        <Route path="/onboarding/industry-selection" element={<IndustrySelection />} />
        <Route path="/onboarding/quiz" element={<Quiz />} />
        <Route path="/onboarding/next-steps" element={<NextSteps />} />
      </Routes>
    </Router>
  );
}

export default App;
