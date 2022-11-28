import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import React, { useState } from 'react';
import Swal from 'sweetalert2';

import PrescriptionSelect from './PrescriptionSelect';

// Material-UI imports listed down below
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
        Swal.fire({
            title: 'Are you sure you want to add this prescription?',
            text: "You can edit or delete in your medlist page!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add it!'
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Added!',
                    'Your Entry has been added.',
                    'success'
                )
                dispatch({
                    type: 'ADD_PRESCRIPTION',
                    payload: newPrescription
                })
                console.log('here is a newPrescription', newPrescription);
                // history.push('/home');
                setTimeout(() => {history.push("/home")}, 2000)
            }
          })
        
        
        
    }

    return (
        <>
            <div className='title'>
                    Add New Prescription
            </div> 

            <Stack
                className='myBox'
                component="form" 
                mx={'auto'}
                sx={{ 
                    '& .MuiTextField-root': { p: 6, width: '18rem', height: '4rem' ,bgcolor: 'white', borderRadius: 5 },
                    color: 'text.primary'
                }}
                noValidate
                autoComplete="off"
                spacing={1}
                onSubmit={(event) => addPrescription(event)}
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

            {/* <PrescriptionSelect 
                required
                id="filled-required"
                label="Prescription Name"
                placeholder="Prescription Name"
                variant="filled"
                onChange={onHandlePrescription}
                name="prescription"
            /> */}

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
                id="outlined-multiline-flexible"
                label="Description"
                placeholder="Description"
                variant="filled"
                multiline
                maxRows={4}
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
            
            <Chip 
                label="Cancel"
                color="primary"
                sx={{ m: 4, height: 40 }}
                onClick={() => { history.push('/home')}}
            />
            </Stack>

            
        </>
    );
}

export default PrescriptionForm;

