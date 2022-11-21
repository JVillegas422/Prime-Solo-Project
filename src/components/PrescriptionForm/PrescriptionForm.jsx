import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react';

// Material-UI imports listed down below
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';

function PrescriptionForm() {
    console.log('in PrescriptionForm');

    const dispatch = useDispatch();
    const history = useHistory();
    const [newPrescription, setNewPrescription] = useState({});
    
    const onHandlePrescription = (evt) => {
        setNewPrescription({ ...newPrescription, [evt.target.name]: evt.target.value })
    }


     const addPrescription = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_PRESCRIPTION',
            payload: newPrescription
        })
        console.log('here is a newPrescription', newPrescription);
        // history.push('/home');
    }

    return (
        <>
            <Typography variant='h3' mt={2} sx={{ p: 3 }}>
                Add New Prescription Form
            </Typography>     

            <Box 
                className='myBox'
                component="form" 
                mx={'auto'}
                sx={{ 
                    '& .MuiTextField-root': { p: 6, width: '18rem', height: '4rem' ,bgcolor: 'white',  },
                    color: 'text.primary'
                }}
                noValidate
                autoComplete="off"
                onSubmit={(event) => addPrescription(event)}
            >
                <FormControl
                    sx= {{ bgcolor: 'grey.400'}}
                >
                <TextField
                    required
                    id="filled-required"
                    label="Prescription Name"
                    placeholder="Prescription Name"
                    variant="filled"
                    onChange={onHandlePrescription}
                    name="prescription"
                />

                <TextField
                    required
                    id="filled-required"
                    label="Dosage"
                    placeholder="Dosage"
                    variant="filled"
                    onChange={onHandlePrescription}
                    name="dosage"
                />

                <TextField
                    required
                    id="filled-required"
                    label="Count"
                    placeholder="Count"
                    variant="filled"
                    onChange={onHandlePrescription}
                    name="count"
                />

                <TextField
                    required
                    id="filled-required"
                    label="Description"
                    placeholder="Description"
                    variant="filled"
                    onChange={onHandlePrescription}
                    name="description"
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ p: 2 }}
                >
                    Save Entry
                </Button>
                </FormControl>
                
            </Box>
            
            <Chip 
                label="Back to My MedList"
                color="primary"
                sx={{ m: 4, height: 40 }}
                onClick={() => { history.push('/home')}}
            />
        </>
    );
}

export default PrescriptionForm;

