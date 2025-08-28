import { Link } from "react-router-dom";

const AdminPortal = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Portal</h1>
      <p>Welcome, Admin! Here you can manage the system tools and company accounts.</p>

      <div className="row mt-4">
        <div className="col-md-4 mb-3">
          <div className="card shadow p-3 h-100 text-center">
            <h5 className="card-title">Manage Companies</h5>
            <p className="card-text">View, edit, or create company accounts.</p>
            <Link to="#" className="btn btn-primary">
              Go
            </Link>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow p-3 h-100 text-center">
            <h5 className="card-title">Assessments</h5>
            <p className="card-text">View or assign quizzes and onboarding steps.</p>
            <Link to="#" className="btn btn-primary">
              Go
            </Link>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow p-3 h-100 text-center">
            <h5 className="card-title">Reports</h5>
            <p className="card-text">Download business health summaries and analytics.</p>
            <Link to="#" className="btn btn-primary">
              Go
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
