import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import NavDrawer from '../NavDrawer/NavDrawer';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <NavDrawer />
      <Link to="/home">
        <h2 className="nav-title"><MedicationOutlinedIcon sx={{ fontSize: 40, alignItems: 'center' }} /> TrackScripts</h2>
      </Link>
      <div>

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/home">
              Home
            </Link> */}

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

            {/* <Link className="navLink" to="/daily_entry">
              Daily Entry
            </Link>

            <Link className="navLink" to="/prescriptionForm">
              Add Prescription
            </Link>

            <Link className="navLink" to="/search">
              Search Page
            </Link>

            <Link className="navLink" to="/testHistory">
              History Page
            </Link> */}

            <LogOutButton className="navLink" />
          </>
        )}

        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      </div>
    </div>
  );
}

export default Nav;
