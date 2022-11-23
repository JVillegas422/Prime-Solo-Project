import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// MUI IMPORTS
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';

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


    // useEffect(() => {
    //     getPrescriptions();
    // }, [params.id]);

    // const getPrescriptions = () => {
    //     dispatch({
    //         type: 'FETCH_EDIT_PRESCRIPTIONS',
    //         payload: params.id
    //     })
    //     return () => {
    //         dispatch({
    //             type: 'CLEAR_EDIT_PRESCRIPTIONS'
    //         })
    //     }
    // }

    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SAVE_PRESCRIPTION',
            payload: editPrescriptions
        })
        history.push('/home');
    }

    // const onHandleNewEntry = (evt) => {
    //     setUpdateEntry({ ...newEntry, [evt.target.name]: evt.target.value })
    // }

    //  const getPrescriptions = () => {
    //     dispatch({
    //         type: 'ADD_NEW_ENTRY',
    //         payload: newEntry
    //     })
    //     console.log('here is a newEntry', newEntry);
    //     history.push('/testHistory');
    // }

    return (
        <>
            <h3>MedList Edit page</h3>

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
                // onSubmit={(event) => addPrescription(event)}
                onSubmit={onSubmit}
            >
                <FormControl
                    sx= {{ bgcolor: 'grey.400'}}
                >
                <TextField
                    label="Prescription"
                    placeholder="Prescription"
                    variant="filled"
                    value={editPrescriptions.prescription}
                    onChange={(evt) => dispatch({ type: 'EDIT_PRESCRIPTION_DETAILS', payload: {prescription: evt.target.value} })}
                />

                <TextField
                    label="Description"
                    placeholder="Description"
                    variant="filled"
                    value={editPrescriptions.description}
                    onChange={(evt) => dispatch({ type: 'EDIT_PRESCRIPTION_DETAILS', payload: {description: evt.target.value} })}
                />

                <TextField
                    label="Dosage"
                    placeholder="Dosage"
                    variant="filled"
                    value={editPrescriptions.dosage}
                    onChange={(evt) => dispatch({ type: 'EDIT_PRESCRIPTION_DETAILS', payload: {dosage: evt.target.value }})}
                />

                <TextField
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
                    Save Update
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

export default MedListEdit;