import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Internship Portal
        </Link>

        <div className="d-flex gap-2">
          <Link className="btn btn-primary" to="/">
            Home
          </Link>
          <Link className="btn btn-success" to="/company-register">
            Company Register
          </Link>
          <Link className="btn btn-warning" to="/company-verify">
            Verify Company
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;