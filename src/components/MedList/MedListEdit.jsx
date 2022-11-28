import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function MedListEdit() {
    console.log('in MedListEdit page');

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const editPrescriptions = useSelector(store => store.editPrescriptions);

    useEffect(() => {
        // Edit mode: fetch the student from the server
        if (params.id) {
            dispatch({
                type: 'FETCH_EDIT_PRESCRIPTIONS',
                payload: params.id
            });
        }
    }, [params.id]);
    // 👆 re-run the fn every time the :id changes

    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SAVE_PRESCRIPTION',
            payload: editPrescriptions
        })
        history.push('/home');
    }

    return (
        <>
                <div className='title'>
                     Edit Prescription Form
                </div> 
                
                <Stack
                    className='myBox'
                    component="form" 
                    mx={'auto'}
                    sx={{ 
                        '& .MuiTextField-root': { p: 6, width: '22rem', height: '7rem' , bgcolor: '#def6fd', borderRadius: 5 },
                        color: 'text.primary'
                    }}
                    noValidate
                    autoComplete="off"
                    spacing={1}
                    onSubmit={onSubmit}
                >
                <TextField
                    label="Prescription"
                    placeholder="Prescription"
                    variant="filled"
                    value={editPrescriptions.prescription}
                    onChange={(evt) => dispatch({ type: 'EDIT_PRESCRIPTION_DETAILS', payload: {prescription: evt.target.value} })}
                />

                <TextField
                    id="filled-multiline-flexiable"
                    label="Description"
                    placeholder="Description"
                    variant="filled"
                    multiline
                    maxRows={8}
                    value={editPrescriptions.description}
                    onChange={(evt) => dispatch({ type: 'EDIT_PRESCRIPTION_DETAILS', payload: {description: evt.target.value} })}
                />

                <TextField
                    label="Dosage"
                    placeholder="Dosage"
                    variant="filled"
                    sx={{ mt: 16 }}
                    value={editPrescriptions.dosage}
                    onChange={(evt) => dispatch({ type: 'EDIT_PRESCRIPTION_DETAILS', payload: {dosage: evt.target.value }})}
                />

                <TextField
                    id="standard-number"
                    type="number"
                    label="Count"
                    placeholder="Count"
                    variant="filled"
                    value={editPrescriptions.count}
                    onChange={(evt) => dispatch({ type: 'EDIT_PRESCRIPTION_DETAILS', payload: {count: evt.target.value } })}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ p: 2 }}
                    
                >
                    Save Edit
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

export default MedListEdit;