import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

// MUI Imports
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import MeetingRoomTwoToneIcon from '@mui/icons-material/MeetingRoomTwoTone';
import MenuOpenTwoToneIcon from '@mui/icons-material/MenuOpenTwoTone';
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';


function NavDrawer() {
    const user = useSelector((store) => store.user);
  
    const [navState, setNavState] = useState({
        left: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setNavState({ ...navState, [anchor]: open });
      };

    //   const links = [
    //     { to: '/home', name: 'Home', icon: <HomeTwoToneIcon /> },
    //     { to: "/daily_entry", name: 'Daily Entry', icon: <AssignmentTwoToneIcon /> },
    //     { to: '/prescriptionForm', name: 'Add Prescription', icon: <MedicationLiquidIcon /> },
    //     { to: '/search', name: 'Search', icon: <SearchTwoToneIcon /> },
    //     { to: '/testHistory', name: 'Entry Journal', icon: <MenuBookTwoToneIcon /> },
    //     { to: '/about', name: 'About', icon: <InfoTwoToneIcon /> },
    //     { to: '/logout', name: 'Logout', icon: <MeetingRoomTwoToneIcon /> },
    //   ];
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {/* {links.map(link => (
                <ListItem key={link.name} disablePadding>
                {link.icon}<Link to = {link.to}>
                <ListItemText primary = {link.name}/></Link>
                </ListItem >
            ))}
        </Box>
      ); */}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeTwoToneIcon />
                  </ListItemIcon>
                  <Link to="/home">
                    Home
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AssignmentTwoToneIcon />
                  </ListItemIcon>
                  <Link to="/daily_entry">
                    Daily Entry
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MedicationLiquidIcon />
                  </ListItemIcon>
                  <Link to="/prescriptionForm">
                    Add Prescription
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SearchTwoToneIcon />
                  </ListItemIcon>
                  <Link to="/search">
                    Search Prescription
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MenuBookTwoToneIcon />
                  </ListItemIcon>
                  <Link to="/history">
                    Entry Journal
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InfoTwoToneIcon />
                  </ListItemIcon>
                  <Link to="/about">
                    About
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MeetingRoomTwoToneIcon />
                  </ListItemIcon>
                  <LogOutButton />
                </ListItemButton>
              </ListItem>

          </List>
        </Box>
      );
    
      return (
        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}><MenuOpenSharpIcon fontSize='large' sx={{ color: 'black' }}/></Button>
              <SwipeableDrawer
                anchor={anchor}
                open={navState[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </div>
      );
    }
  
  export default NavDrawer;
  