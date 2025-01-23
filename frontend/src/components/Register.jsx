import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    termsAccepted: false, // To handle Terms and Conditions checkbox
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      // Handle file upload separately to ensure only file info is stored
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    for (let key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(res.data.message);
      window.location.href = '/login'; // Redirect to login after successful registration
    } catch (err) {
      alert(err.response?.data?.message || 'Error registering');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            className="form-control"
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            className="form-control"
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            name="phone"
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Enter your phone number"
            onChange={handleChange}
          />
        </div>

       


        {/* Terms and Conditions */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="termsAccepted"
            id="termsAccepted"
            className="form-check-input"
            onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
            required
          />
          <label htmlFor="termsAccepted" className="form-check-label">
            I accept the <a href="/terms">Terms and Conditions</a>.
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
