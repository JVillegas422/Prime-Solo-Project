import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
// import { useHistory } from 'react-router-dom';

function EntryHistory() {
    console.log('in EntryHistory');

    const dispatch = useDispatch();
    // const history = useHistory();
    const entryHistory = useSelector(store => store.dailyEntryReducer);
    console.log('user history ****', entryHistory);

    useEffect(() => {
        dispatch({
            type: 'FETCH_ENTRY_HISTORY'
        })
    }, [])

    return (
        <>
            <h3>Entry History Page</h3>
            
                <table>
                    <thead>
                        <tr>
                            <th>Prescription Name</th>
                            <th>Prescription Amount</th>
                            <th>Time Taken</th>
                            <th>Quantity</th>
                            <th>Notes</th>
                            <th>Edit Entry</th>
                        </tr>
                        
                        {entryHistory.map(entry => {
                            return (
                                <tr key={entry.id}>
                                    <td>
                                        {entry.prescription_name}
                                    </td>

                                    <td>
                                        {entry.prescription_amount}
                                    </td>

                                    <td>
                                        {entry.addDate}
                                    </td>

                                    <td>
                                        {entry.quantity}
                                    </td>

                                    <td>
                                        {entry.notes}
                                    </td>

                                    <td>
                                        <button>Edit Entry</button>
                                    </td>

                                </tr>
                            )
                        })}
                    </thead>
                </table>
        </>
    );
}

export default EntryHistory;