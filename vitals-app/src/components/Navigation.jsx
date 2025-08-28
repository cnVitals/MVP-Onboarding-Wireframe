import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/business-portal">VITALS</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/business-portal">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/onboarding/next-steps">Next Steps</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/business-login" onClick={() => localStorage.clear()}>Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
