import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

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
          
            <ul>
                {newArr.map(items => (items.map(nameItem => (
                    <li key={nameItem}>
                        {nameItem}
                    </li>
                ))))} 
            </ul>
        </>
    );
}

export default SearchForm;