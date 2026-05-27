import { useState } from "react";
import axios from "axios";
import "../styles/companyRegister.css";

function CompanyRegister() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    gstNumber: "",
    isoNumber: "",
    website: "",
    address: "",
    certificate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/companies/register", formData);
      alert(res.data.message);
      setFormData({
        companyName: "",
        email: "",
        gstNumber: "",
        isoNumber: "",
        website: "",
        address: "",
        certificate: "",
      });
    } catch (error) {
      alert("Failed to register company");
      console.log(error);
    }
  };

  return (
    <div className="company-page">
      <div className="company-card">
        <h1 className="company-title">Company Registration</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">GST Number</label>
            <input
              type="text"
              className="form-control"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              placeholder="Enter GST number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">ISO Number</label>
            <input
              type="text"
              className="form-control"
              name="isoNumber"
              value={formData.isoNumber}
              onChange={handleChange}
              placeholder="Enter ISO number"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Website</label>
            <input
              type="text"
              className="form-control"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Enter website link"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter company address"
              rows="4"
            />
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            Register Company
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompanyRegister;