import React from 'react';

const Form = (props) => {
    return (  <form onChange={props.change} onSubmit={props.submit}>
        <div>
            <label htmlFor="firstname">First name</label>
            <input type="text" id="firstname" name="firstname" />
        </div>
        <div>
            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" name="lastname" />
        </div>
        <div>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" />
        </div>
        <div>
            <label htmlFor="role">Role</label>
            <select id="role" name="role" defaultValue="choice">
                <option value="choice" disabled>Select a role</option>
                <option value="teacher" >Teacher</option>
                <option value="student" >Student</option>
                <option value="other" >Other</option>
            </select>
        </div>
        <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
        </div>
        <button type='submit'> Send Data </button>
     </form>
    );
    
};

export default Form;