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

function DailyEntry() {
    console.log('in DailyEntry');

    const dispatch = useDispatch();
    const history = useHistory();
    const [newEntry, setNewEntry] = useState({});
    
    const onHandleNewEntry = (evt) => {
        setNewEntry({ ...newEntry, [evt.target.name]: evt.target.value })
    }


     const addNewEntry = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_NEW_ENTRY',
            payload: newEntry
        })
        console.log('here is a newEntry', newEntry);
        // history.push('/');
    }

    return (
        <>
            <Typography variant='h3' mt={2} sx={{ p: 3 }}>
                Create Entry Form
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
                onSubmit={(event) => addNewEntry(event)}
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
                    onChange={onHandleNewEntry}
                    name="prescription_name"
                />

                <TextField
                    required
                    id="filled-required"
                    label="Prescription Amount"
                    placeholder="Prescription Amount"
                    variant="filled"
                    onChange={onHandleNewEntry}
                    name="prescription_amount"
                />

                <TextField
                    required
                    id="filled-required"
                    label="Time"
                    placeholder="Time"
                    variant="filled"
                    onChange={onHandleNewEntry}
                    name="tstz"
                />

                <TextField
                    required
                    id="filled-required"
                    label="Quantity"
                    placeholder="Quantity"
                    variant="filled"
                    onChange={onHandleNewEntry}
                    name="quantity"
                />

                <TextField
                    required
                    id="filled-required"
                    label="Notes"
                    placeholder="Notes"
                    variant="filled"
                    onChange={onHandleNewEntry}
                    name="notes"
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
                onClick={() => { history.push('/')}}
            />
        </>
    );
}

export default DailyEntry;

