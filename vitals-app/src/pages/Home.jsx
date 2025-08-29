import { Link } from "react-router-dom";

const Home = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1581092580490-d0a93df9c39c?auto=format&fit=crop&w=1470&q=80";

  return (
    <div>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "75vh",
        }}
      >
        <div className="bg-dark bg-opacity-50 p-5 rounded">
          <h1 className="display-3 fw-bold">Welcome to VITALS</h1>
          <p className="lead mt-3">
            Assess your business health, track progress, and take actionable steps toward growth.
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/business-login" className="btn btn-primary btn-lg">
              Business Login
            </Link>
            <Link to="/admin-login" className="btn btn-outline-light btn-lg">
              Admin Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-5">Why Choose VITALS?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow h-100 border-0">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-journal-check display-4 text-primary"></i>
                </div>
                <h5 className="card-title mb-3">Onboarding</h5>
                <p className="card-text">
                  Step-by-step guidance to set up your business profile and complete assessments.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 border-0">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-bar-chart-line display-4 text-success"></i>
                </div>
                <h5 className="card-title mb-3">Dashboard</h5>
                <p className="card-text">
                  Visualize your performance with interactive graphs, health summaries, and reports.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow h-100 border-0">
              <div className="card-body text-center">
                <div className="mb-3">
                  <i className="bi bi-lightbulb display-4 text-warning"></i>
                </div>
                <h5 className="card-title mb-3">Next Steps</h5>
                <p className="card-text">
                  Receive actionable recommendations, schedule calls, and track your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary text-white text-center py-5">
        <h2 className="mb-4">Get Started with VITALS Today</h2>
        <Link to="/business-login" className="btn btn-light btn-lg me-2">
          Business Login
        </Link>
        <Link to="/admin-login" className="btn btn-outline-light btn-lg">
          Admin Login
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-4">
        <p className="mb-0">&copy; {new Date().getFullYear()} VITALS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
