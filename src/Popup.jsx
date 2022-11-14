import React from 'react';

const Popup = (props) => {
    return (
        <div>
            <h2>Your message</h2>
            <p>
             First name:   <span>{props.firstname}</span>
            </p>
            <p>
            Last name:   <span>{props.lastname}</span>
            </p>
            <p>
             Phone:  <span>{props.phone}</span>
            </p>
            <p>
             Role:   <span>{props.role}</span>
            </p>
            <p>
            Message:   <span>{props.message}</span>
            </p>
            <button onClick={props.close}>Ok</button>
            <button onClick={props.close}>Cancel</button>
        </div>
    );
};

export default Popup;