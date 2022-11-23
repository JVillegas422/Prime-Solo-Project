import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

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

function SearchForm() {
    console.log('in SearchForm');
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useState('');
    const results = useSelector(store => store.searchReducer);
    const searchResults = results.searchList;

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
            <h2>Search For A Prescription</h2>

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

            <h2>Results</h2>
          
            {/* <ul>
                {newArr.map(items => (items.map(nameItem => (
                    <li key={nameItem}>
                        {nameItem}
                    </li>
                ))))} 
            </ul> */}

            {/**
             * Test Table
             */}

            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 750 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Prescription Name</TableCell>
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
                                {itemName}
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

        </>
    );
}

export default SearchForm;