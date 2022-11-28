import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './SearchForm.css';

// MUI Imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';


function SearchForm() {
    console.log('in SearchForm');
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useState('');
    const results = useSelector(store => store.searchReducer);
    const searchResults = results.searchList;
    console.log('searchResults', searchResults);

    let newArr = [];
    searchResults.forEach((searchResult) => {
        searchResult.forEach((data) => {
            newArr.push(data);
            return newArr;
        });
    });

    const onSearch = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'FETCH_SEARCH',
            payload: searchParams
        });
        setSearchParams('');
    }

    useEffect(() => {
        dispatch({
            type: 'CLEAR_SEARCH'
        });
    }, []);


    return (
        <>
            <div className='aboveSearch'>
            <h2 className='textColor'>Search For A Prescription</h2>

            <form onSubmit={onSearch}>
                <input
                    type="text"
                    value={searchParams}
                    onChange={evt => setSearchParams(evt.target.value)}
                />
                <input 
                    type="submit" 
                    value="Find Prescription" 
                />
            </form>

            <h2 className='textColor'>Results</h2>
            </div>
          
            {/* <ul>
                {newArr.map(items => (items.map(nameItem => (
                    <li key={nameItem.id}>
                        Prescription Name: {nameItem.brand_name} Product Number: {nameItem.product_number} Dosage Form: {nameItem.dosage_form} Route: {nameItem.route}
                    </li>
                ))))} 
            </ul> */}

            {/**
             * Test Table
             */}
            <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 750 }} aria-label="simple table">
                    <TableHead sx={{ bgcolor: '#a6c7f4' }}>
                        <TableRow>
                            <TableCell>Prescription Name</TableCell>
                            <TableCell>Product Number</TableCell>
                            <TableCell>Dosage Form</TableCell>
                            <TableCell>Route</TableCell>
                            <TableCell align="right">Add Button</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {newArr.map(rows => (rows.map(itemName => (
                        <TableRow
                            key={itemName.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {itemName.brand_name}
                            </TableCell>

                            <TableCell component="th" scope="row">
                                {itemName.product_number}
                            </TableCell>

                            <TableCell component="th" scope="row">
                                {itemName.dosage_form}
                            </TableCell>

                            <TableCell component="th" scope="row">
                                {itemName.route}
                            </TableCell>
                        
                            <TableCell align="right">
                                <Button variant="contained" >
                                    <AddBoxIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
        </>
    );
}

export default SearchForm;