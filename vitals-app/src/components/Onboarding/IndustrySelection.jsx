import { useState } from "react";
import { useNavigate } from "react-router-dom";

const IndustrySelection = () => {
  const [industry, setIndustry] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("industry", industry);
    navigate("/onboarding/quiz");
  };

  return (
    <div className="container mt-5">
      <h2>Select Industry</h2>
      <select className="form-select" onChange={(e) => setIndustry(e.target.value)}>
        <option value="">--Choose--</option>
        <option value="real-estate">Real Estate</option>
        <option value="manufacturing">Manufacturing</option>
      </select>
      <button className="btn btn-primary mt-3" onClick={handleNext}>Next</button>
    </div>
  );
};

export default IndustrySelection;
