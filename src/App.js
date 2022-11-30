import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import View from './View';
import Popup from './Popup';
import Notes from './Notes';
import axios from 'axios';

class App extends Component {
  state = {
    note: {
    id: '',
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
};

sendHandler = (e) => {
  axios
    .post("http://localhost:3001/notes", this.state.note)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
    window.location.reload();
};

closeHandler = (e) => {
  e.preventDefault();
  this.setState({showpopup: !this.state.showpopup})
};

  render(){ 
    return (
      <div className='appContainer'>
        <Form change={this.inputHandler} submit={this.submitHandler} />
        <View  {...this.state.note}/>
        <Notes />
       {this.state.showpopup && ( 
       <Popup
        firstname = {this.state.note.firstname}
        lastname={this.state.note.lastname}
        phone={this.state.note.phone}
        role={this.state.note.role}
        message={this.state.note.message}
        send={this.sendHandler}
        cancel={this.closeHandler}
         /> 
         )}
        
      </div>
    );

  }
 
}

export default App;
