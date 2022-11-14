import React from 'react';

const View = (props) => {
    return <div>
           <h1>This is your input: </h1>
           <p>
            <span> First name {props.firstname}</span>
           </p>
           <p>
            <span> Last name {props.lastname}</span>
           </p>
           <p>
            <span> Phone {props.phone}</span>
           </p>
           <p>
            <span> Role {props.role}</span>
           </p>
           <p>
            <span> Message {props.message}</span>
           </p>
           
        </div>
    
};

export default View;