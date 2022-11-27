import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './MedList.css';

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
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

import Paper from '@mui/material/Paper';


// MUI Chip
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid';


function MedList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const params = useParams();
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
      <Box 
        sx={{ 
          flexGrow: 2, 
          maxWidth: 940, 
          bgcolor: '#7589e4',
          borderRadius: 5,
          padding: 4
        }}
      >
        
      {/* <div className="container">
        <h2>Welcome, {user.username}!</h2>     
      </div> */}
      <div className='medListBox' >
        <h2>Welcome, {user.username}!</h2>
      </div>

      <FormGroup row sx={{ ml: 3, padding: 3 }}>
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
      
        <Grid item xs={12} md={6} bgcolor='#94c1f4' sx={{ ml: 3, mr: 3, borderRadius: 5, width: 885 }}>
            <div className='myList'>
              <h4>My Prescription List</h4>
            </div>
          <List dense={dense}>  
          {prescriptions.map(item => {
            return (
              <Paper elevation={3} sx={{ display: 'flex', m: 2, height: 150, width: 850, borderRadius: 5, bgcolor: "#d2edf9" }} >
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => dispatch({ type: 'DELETE_PRESCRIPTION', payload: item.id })} >
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
                  sx={{ m: 2, height: 40 }}
                  color="primary" 
                  label={item.count}
                />

                <ListItemText
                  primary={`${item.prescription} : ${item.dosage}`}
                  dosage={item.dosage}
                  count={item.count}
                  secondary={secondary ? `${item.description}` : null}
                />

                  <Stack direction="row" spacing={1}  >
                    <Chip 
                      sx={{ bgcolor: '#a0b1ff' }}
                      icon={<MedicationLiquidIcon />} 
                      label="Take Medz Now" variant="outlined" 
                      onClick={() => { history.push('/daily_entry')}}
                    />

                    <Chip 
                      sx={{ bgcolor: '#a0b1ff' }}
                      icon={<EditTwoToneIcon />} 
                      label="Edit Prescription" variant="outlined" 
                      onClick={() => { history.push(`/editMedList/${item.id}`)}}
                    />
                  </Stack>
                  
                </ListItem>
                </Paper>
              )
            })}
          </List>

        </Grid>
      </Box>

    </>
  );
}

export default MedList;