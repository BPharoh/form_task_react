import React from 'react';
import './View.css';

const View = (props) => {
    return <div className='viewContainer'>
           <h1>This is your input: </h1>
           <p> First name: 
            <span>{props.firstname}</span>
           </p>
           <p>Last name:
            <span>{props.lastname}</span>
           </p>
           <p>Phone:
            <span>{props.phone}</span>
           </p>
           <p>Role: 
            <span>{props.role}</span>
           </p>
           <p> Message: 
            <span>{props.message}</span>
           </p>
        </div>
    
};

export default View;