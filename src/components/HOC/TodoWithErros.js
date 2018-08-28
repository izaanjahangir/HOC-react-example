import React from 'react';
import Loader from '../Loader/Loader';

// HOC that checks for errors and show them and show loader
const withErrors = (WrappedComponent) => ({todos}) => {
    console.log(todos);
    if(todos && todos.length < 1){
        return(
            <ul className="list-group">
                <li className="list-group-item">No todo found...</li>
            </ul>
        )
    }
    return(
        todos ? <WrappedComponent todos={todos} /> :  <Loader />
    )
}


export default withErrors;