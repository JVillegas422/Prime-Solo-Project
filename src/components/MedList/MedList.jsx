import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import MedicationTwoToneIcon from '@mui/icons-material/MedicationTwoTone';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

// MUI Chip
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';
import Fab from '@mui/material/Fab';


function MedList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const prescriptions = useSelector(store => store.prescriptionsReducer);
  console.log('user prescriptions ****', prescriptions);
    

    useEffect(() => {
        dispatch({
            type: 'FETCH_PRESCRIPTION_LIST'
        })
    }, [])

  return (
    <>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        
      <div className="container">
        <h2>Welcome, {user.username}!</h2>     
      </div>

      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="View prescription info"
        />
      </FormGroup>
      
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            My Prescription List
          </Typography>
          <List dense={dense}>  
          {prescriptions.map(item => {
            return (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar 
                    sx={{ bgcolor: "#1976d2" }}
                  >
                    <MedicationTwoToneIcon />
                  </Avatar>
                </ListItemAvatar>

                <Chip 
                  sx={{ m: 2, height: 35 }}
                  color="primary" 
                  label={item.count}
                />

                <ListItemText
                  
                  primary={item.prescription}
                  dosage={item.dosage}
                  count={item.count}
                  secondary={secondary ? `${item.dosage} : ${item.description}` : null}
                />
                </ListItem>
              )
            })}
          </List>
            
            <Stack direction="row" spacing={1}>
              <Chip 
                icon={<MedicationLiquidIcon />} 
                label="Take Medz Now" variant="outlined" 
                onClick={() => { history.push('/daily_entry')}}
              />
            </Stack>

        </Grid>
      </Box>

    </>
  );
}

export default MedList;