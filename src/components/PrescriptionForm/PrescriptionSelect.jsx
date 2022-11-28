import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

// MUI Imports
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

function getStyles(name, prescriptionName, theme) {
  return {
    fontWeight:
    prescriptionName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function PrescriptionSelect() {

  useEffect(() => {
    dispatch({
        type: 'FETCH_PRESCRIPTION_LIST'
    })
}, [])

  const dispatch = useDispatch();
  const prescription = useSelector(store => store.prescriptionsReducer);

  const theme = useTheme();
  const [prescriptionName, setPrescriptionName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPrescriptionName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      {/* <FormControl sx={{ m: 1, width: 300, bgcolor: 'white' }}> */}
        <InputLabel id="demo-multiple-name-label">Prescription</InputLabel>
        <Select
          // labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={prescriptionName}
          onChange={handleChange}
          // input={<OutlinedInput label="Prescription" />}
          MenuProps={MenuProps}
          sx={{ m: 1, width: 300, bgcolor: 'white' }}
        >
          {prescription.map((name) => (
            <MenuItem
              key={name.id}
              value={name}
              style={getStyles(name, prescriptionName, theme)}
            >
              {name.prescription}
            </MenuItem>
          ))}
        </Select>
      {/* </FormControl> */}
    </div>
  );
}

export default PrescriptionSelect;