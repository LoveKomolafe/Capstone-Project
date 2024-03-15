import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaUser,
  FaSearch,
  FaHeart,
  FaBell,
  FaCog,
} from "react-icons/fa";
import "../assets/Styles/search.css";
import hospitalData from "../assets/hospitalfile.json";

const Search = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState("");

  const handleHospitalSearch = () => {
    setLoading(true);
    console.log("Hospital Data Features:", hospitalData.features);
    const filteredHospitals = hospitalData.filter(
      (hospital) =>
        hospital.name.toLowerCase().includes(query.toLowerCase()) ||
        hospital.state_name.toLowerCase().includes(query.toLowerCase()) ||
        hospital.lga_name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredHospitals);
    setLoading(false);
  };

  const exportAsCSV = () => {
    const filename = "hospitalData.csv";
    const csvData = hospitalData
      .map((hospital) => {
        return Object.values(hospital).join(",");
      })
      .join("\n");

    const blob = new Blob([csvData], { type: "text/csv" });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const a = document.createElement("a");
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const exportAsJSON = () => {
    const filename = "hospitalData.json";
    const jsonData = JSON.stringify(hospitalData, null, 2);

    const blob = new Blob([jsonData], { type: "application/json" });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const a = document.createElement("a");
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">C A R E F I N D E R</div>
          <Link to="/">Home</Link>
          <div className="profile-dropdown">
            <button
              type="button"
              className="profile-button"
              onClick={toggleDropdown}
            >
              <img src="https://picsum.photos/50" alt="Profile" />
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                <ul>
                  <li>
                    <FaChartLine />
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <FaUser />
                    <Link to="/dashboard/profile">Profile</Link>
                  </li>
                  <li>
                    <FaSearch />
                    <Link to="/dashboard/search">Search Hospitals</Link>
                  </li>
                  <li>
                    <FaHeart />
                    <Link to="/dashboard/share">Share Hospitals</Link>
                  </li>
                  <li>
                    <FaBell />
                    <Link to="/dashboard/notifications">Notifications</Link>
                  </li>
                  <li>
                    <FaCog />
                    <Link to="/dashboard/settings">Settings</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <br />
      <div className="search-export">
        <div className="search">
          <h2>Search Hospitals</h2>
          {/* Add search form here */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter Hospital Name or Location"
          />
          <button onClick={handleHospitalSearch}>Search</button>
          {loading && <p>Loading...</p>}
          {searchResults && searchResults.length > 0 && (
            <div>
              <h2>Search Results:</h2>
              <ul>
                {searchResults.map((hospital, index) => (
                  <li key={index}>
                    {hospital.name} - {hospital.state_name}, {hospital.lga_name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!loading && searchResults === null && (
            <p>Perform a search to find hospitals</p>
          )}
          {!loading && searchResults && searchResults.length === 0 && (
            <p>
              No hospitals found. Input the correct field and please try again.
            </p>
          )}
        </div>
        <div className="export">
          <h2>Export Hospital</h2>
          <div className="export-buttons">
            <button onClick={exportAsCSV}>Export as CSV</button>
            <button onClick={exportAsJSON}>Export as JSON</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
