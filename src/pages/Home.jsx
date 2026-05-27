import "../styles/home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-box text-center">
          <span className="hero-badge">AI + Cloud Internship Platform</span>

          <h1 className="hero-title">
            Internship Verification System
          </h1>

          <p className="hero-text">
            A smart portal for company verification, student internship approval,
            and auto-generated NOC with fast and secure workflow.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary btn-lg">Get Started</button>
            <button className="btn btn-outline-dark btn-lg">View Process</button>
          </div>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h4>Company Verification</h4>
              <p>
                Verify company registration, ISO, GST, and official details in one place.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h4>Student Approval</h4>
              <p>
                Students upload internship details and get quick verification support.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h4>Auto NOC Generation</h4>
              <p>
                Generate clean NOC PDFs automatically after successful verification.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-6">
            <div className="step-box">
              <h5>Step 1</h5>
              <p className="mb-0">Company registers and uploads certificates.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="step-box">
              <h5>Step 2</h5>
              <p className="mb-0">System verifies and generates NOC for student.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;