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
  // this.setState({
  //   firstname: '',
  //   lastname: '',
  //   phone: '',
  //   role: '',
  //   message: '',
  // });
  window.location.reload();
};

  render(){ 
    return (
      <div>
        App will be here
        <Form change={this.inputHandler} 
        submit={this.submitHandler}/>
        <View 
        {...this.state.note}
        // firstname={this.state.firstname}
        // lastname={this.state.lastname}
        // phone={this.state.phone}
        // role={this.state.role}
        // message={this.state.message}
        />

       {this.state.showpopup && ( 
       <Popup
        firstname={this.state.note.firstname}
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
