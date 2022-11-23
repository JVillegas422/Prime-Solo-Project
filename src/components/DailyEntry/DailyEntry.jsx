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

// Material-UI imports
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function DailyEntry() {
    console.log('in DailyEntry');

    const dispatch = useDispatch();
    const history = useHistory();
    const [addDate, setAddDate] = useState(dayjs().format());

    const [prescription_name, setPrescription_Name] = useState('');
    const [prescription_amount, setPrescription_Amount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [notes, setNotes] = useState('');

    const addNewEntry = () => {
        console.log('in handleClick');
        const newEntry = {
            prescription_name: prescription_name,
            prescription_amount: prescription_amount,
            addDate: addDate,
            quantity: quantity,
            notes: notes,
        }
        dispatch({
            type: 'ADD_NEW_ENTRY',
            payload: newEntry
        })
        // clear inputs
        setPrescription_Name('');
        setPrescription_Amount('');
        setAddDate('');
        setQuantity('');
        setNotes('');
        // history.push('/testHistory');
    }

    const handleAddDate = (value) => {
        console.log('in handleAddDate Value is:', value.$d)
        setAddDate(value);
    } 

    // const onHandleNewEntry = (evt) => {
    //     setNewEntry({ ...newEntry, [evt.target.name]: evt.target.value })
    // }

    //  const addNewEntry = (evt) => {
    //     evt.preventDefault();
    //     dispatch({
    //         type: 'ADD_NEW_ENTRY',
    //         payload: newEntry
    //     })
    //     console.log('here is a newEntry', newEntry);
    //     history.push('/testHistory');
    // }

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
                    onChange={(event) => setPrescription_Name(event.target.value)}
                    value={prescription_name}
                />

                <TextField
                    required
                    id="filled-required"
                    label="Prescription Amount"
                    placeholder="Prescription Amount"
                    variant="filled"
                    onChange={(event) => setPrescription_Amount(event.target.value)}
                    value={prescription_amount}
                />

                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="DateTimePicker"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                    />
                    </LocalizationProvider> */}

                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="DateTimePicker"
                        value={addDate}
                        onChange={(newAddDate) => {
                            handleAddDate(newAddDate);
                        }}
                    />
                    </LocalizationProvider>

                {/* <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                    <DatePicker
                        disableFuture
                        label="Responsive"
                        openTo="year"
                        views={['year', 'month', 'day']}
                        addDate={(value => setAddDate(value))}
                        onChange={handleAddDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider> */}

                <TextField
                    required
                    id="filled-required"
                    label="Quantity"
                    placeholder="Quantity"
                    variant="filled"
                    onChange={(event) => setQuantity(event.target.value)}
                    value={quantity}
                />

                <TextField
                    required
                    id="filled-required"
                    label="Notes"
                    placeholder="Notes"
                    variant="filled"
                    onChange={(event) => setNotes(event.target.value)}
                    value={notes}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{ p: 2 }}
                    onClick={addNewEntry}
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

export default DailyEntry;

