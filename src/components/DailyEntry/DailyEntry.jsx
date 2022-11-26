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
import dateFormat from 'dateformat';

// Material-UI imports
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';


function DailyEntry() {
    console.log('in DailyEntry');

    const dispatch = useDispatch();
    const history = useHistory();
    const [addDate, setAddDate] = useState('');
    var utc = require('dayjs/plugin/utc')
    dayjs.extend(utc)
    var localizedFormat = require('dayjs/plugin/localizedFormat')
    dayjs.extend(localizedFormat)

    const [prescription_name, setPrescription_Name] = useState('');
    const [prescription_amount, setPrescription_Amount] = useState('');
    const [quantity, setQuantity] = useState('');
    const [notes, setNotes] = useState('');

    const addNewEntry = () => {
        console.log('in handleClick',addDate);
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
                    label="Prescription"
                    placeholder="Prescription"
                    variant="filled"
                    onChange={(event) => setPrescription_Name(event.target.value)}
                    value={prescription_name}
                />

                <TextField
                    required
                    id="filled-required"
                    label="Dosage"
                    placeholder="Dosage"
                    variant="filled"
                    onChange={(event) => setPrescription_Amount(event.target.value)}
                    value={prescription_amount}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DateTimePicker
                        renderInput={(params) => {
                            return <TextField {...params} />;
                        }}
                        label="DateTimePicker"
                        variant="outlined"
                        // value={dayjs(addDate).format('L LT')}
                        inputFormat="YYYY/MM/DD hh:mm a"
                        value={dayjs(addDate).format('L LT')}
                        fullWidth
                        onChange={handleAddDate}
                    />
                    </LocalizationProvider>

                <TextField
                    required
                    id="standard-number"
                    type="number"
                    label="Quantity"
                    variant="filled"
                    onChange={(event) => setQuantity(event.target.value)}
                    value={quantity}
                    InputLabelProps={{
                        shrink: true,
                      }}
                />

                <TextField
                    required
                    id="outlined-multiline-flexible"
                    label="Notes"
                    placeholder="Notes"
                    variant="filled"
                    multiline
                    maxRows={4}
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

