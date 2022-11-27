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


function NavTest() {
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
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {/* {['Home', 'Daily Entry', 'Add Prescription', 'Search', 'Entry Journal', 'About, Log Out'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeTwoToneIcon /> : <AssignmentTwoToneIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
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
                    Add Medz
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <SearchTwoToneIcon />
                  </ListItemIcon>
                  <Link to="/search">
                    Search Medz
                  </Link>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <MenuBookTwoToneIcon />
                  </ListItemIcon>
                  <Link to="/testHistory">
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
                  <Link to="/logout">
                    Log Out
                  </Link>
                </ListItemButton>
              </ListItem>

          </List>
        </Box>
      );
    
      return (
        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}><MenuOpenTwoToneIcon fontSize='large'/></Button>
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
  
  export default NavTest;
  