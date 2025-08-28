import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockLogin } from "../api/mockApi";

const BusinessLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await mockLogin({ email, password, role: "business" });
    if (res.success) {
      localStorage.setItem("role", "business");
      switch (res.onboardingStatus) {
        case "none":
          navigate("/onboarding/industry-selection");
          break;
        case "in-progress":
          navigate("/onboarding/quiz");
          break;
        case "completed":
          navigate("/business-portal");
          break;
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1>Business Login</h1>
      <input className="form-control my-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="form-control my-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary mt-2" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default BusinessLogin;
