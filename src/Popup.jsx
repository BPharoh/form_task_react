import React from 'react';
import './Popup.css';

const Popup = (props) => {
    return (
        <div className='popupContainer'>
            <div className='popupContent'>
            <h2>This is your message</h2>
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
            <div className='buttons'>
            <button onClick={props.close}>Ok</button>
            <button onClick={props.close}>Cancel</button>
            </div>
            </div>
        </div>
    );
};

export default Popup;