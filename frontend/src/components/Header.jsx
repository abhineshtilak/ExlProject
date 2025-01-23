import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  // Check if the user is logged in by checking the localStorage for a token
  const token = localStorage.getItem('token');
  
  // Use React Router's `useNavigate` hook for programmatic navigation
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <>
      <header role="banner">
        <div>
          <div className="p-3 mb-2 bg-warning">
            <nav className="navbar navbar-light navbar-expand-md navigation-clean-search">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">MOcKTesT</a>
                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="nav navbar-nav">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">
                        Services
                      </a>
                      <div className="dropdown-menu" role="menu">
                        <a className="dropdown-item" role="presentation" href="#">Logo design</a>
                        <a className="dropdown-item" role="presentation" href="#">Banner design</a>
                        <a className="dropdown-item" role="presentation" href="#">Content writing</a>
                      </div>
                    </li>
                  </ul>
                </div>

                <form className="form-inline mr-auto" target="_self">
                  <div className="form-group">
                    {/* Search field can go here */}
                  </div>
                </form>

                {/* Conditional rendering based on login status */}
                <span className="navbar-text">
                  {token ? (
                    <>
                      {/* If token exists (user is logged in), show Profile and Logout buttons */}
                      <Link className="btn btn-light action-button" to="/profile">Profile</Link>
                      <button className="btn btn-light action-button" onClick={handleLogout}>
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      {/* If no token (user is not logged in), show Login and Signup buttons */}
                      <Link className="login" to="/login">Log In</Link>
                      <a className="btn btn-light action-button" role="button" href="/register">Signup</a>
                    </>
                  )}
                </span>

              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
