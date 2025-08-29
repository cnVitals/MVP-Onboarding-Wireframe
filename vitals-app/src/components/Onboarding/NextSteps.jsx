import { useNavigate } from "react-router-dom";

const NextSteps = () => {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <h2>Next Steps</h2>
      <ul>
        <li><button className="btn btn-outline-primary" onClick={() => alert("Call scheduled!")}>Book Call</button></li>
        <li><button className="btn btn-outline-success" onClick={() => alert("Showing recommendation playbooks!")}>Recommendation Playbooks</button></li>
      </ul>
      <button className="btn btn-primary mt-3" onClick={() => navigate("/business-portal")}>Go to Business Portal</button>
    </div>
  );
};

export default NextSteps;
