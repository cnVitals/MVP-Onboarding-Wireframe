import Navigation from "../components/Navigation";
import BodyGraph from "../components/Dashboard/BodyGraph";
import HealthSummary from "../components/Dashboard/HealthSummary";

const BusinessPortal = () => {
  return (
    <div className="container mt-3">
      <Navigation />
      <h2>Business Portal</h2>
      <BodyGraph />
      <HealthSummary />
    </div>
  );
};

export default BusinessPortal;
