import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import View from './View';
import Popup from './Popup';

class App extends Component {
  state = {
    note: {
    firstname: '',
    lastname: '',
    phone: '',
    role: '',
    message: '',
    },
    showpopup: false,

  };
inputHandler = (e) => {
  this.setState({
   note: {...this.state.note,  [e.target.name]: e.target.value},
  });
};

submitHandler = (e) => {
  e.preventDefault();
  this.setState({showpopup: !this.state.showpopup})
}

closeHandler = (e) => {
  window.location.reload();
};

  render(){ 
    return (
      <div>
        <Form change={this.inputHandler} 
        submit={this.submitHandler}
        />
        <View 
        {...this.state.note}
        />

       {this.state.showpopup && ( 
       <Popup
        firstname = {this.state.note.firstname}
        lastname={this.state.note.lastname}
        phone={this.state.note.phone}
        role={this.state.note.role}
        message={this.state.note.message}
        close={this.closeHandler}
         /> 
         )}
      </div>
    );

  }
 
}

export default App;
