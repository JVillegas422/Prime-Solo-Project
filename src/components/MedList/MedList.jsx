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
import MedicationIcon from '@mui/icons-material/Medication';
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

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

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
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#1976d2" }}>
                      <MedicationTwoToneIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Medication List"
                    secondary={secondary ? 'See prescription information right here!' : null}
                  />
                </ListItem>,
              )}
              <h3>Prescription List</h3>
              <table>
                    <thead>
                        <tr>
                            <th>Prescription Name</th>
                            <th>Dosage</th>
                            <th>Count</th>
                            <th>Description</th>
                        </tr>
                        
                        {prescriptions.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>
                                        {item.prescription}
                                    </td>

                                    <td>
                                        {item.dosage}
                                    </td>

                                    <td>
                                        {item.count}
                                    </td>

                                    <td>
                                        {item.description}
                                    </td>
                                </tr>
                            )
                        })}
                    </thead>
                </table>
            </List>
            <Stack direction="row" spacing={1}>
                <Chip icon={<MedicationLiquidIcon />} label="Take Medz Now" variant="outlined" onClick={() => { history.push('/daily_entry')}}/>
            </Stack>
        </Grid>

        {/* <Stack direction="row" spacing={1}>
            <Chip icon={<MedicationLiquidIcon />} label="Take Medz Now" variant="outlined" />
        </Stack> */}
    </Box>
    {/* <table>
                    <thead>
                        <tr>
                            <th>Prescription Name</th>
                            <th>Dosage</th>
                            <th>Count</th>
                            <th>Description</th>
                        </tr>
                        
                        {prescriptions.map(prescription => {
                            return (
                                <tr key={prescription.id}>
                                    <td>
                                        {prescription.prescription}
                                    </td>

                                    <td>
                                        {prescription.dosage}
                                    </td>

                                    <td>
                                        {prescription.count}
                                    </td>

                                    <td>
                                        {prescription.description}
                                    </td>
                                </tr>
                            )
                        })}
                    </thead>
                </table> */}
    </>
  );
}

export default MedList;