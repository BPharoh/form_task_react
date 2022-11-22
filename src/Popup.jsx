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
            <p>Message: <p className='message_style'>{props.message}</p>
            </p>
            <div className='buttons'>
            <button onClick={props.send}>Ok</button>
            <button onClick={props.cancel}>Cancel</button>
            </div>
            </div>
        </div>
    );
};

export default Popup;