import React, { Component } from 'react';
import axios from 'axios';

class Notes extends Component {
    state = {
        data: [],
        isLoading: false
      };
    
    componentDidMount(){
        this.setState({isloading: true});
        axios
        .get("http://localhost:3001/notes")
        .then((res) => {
        console.log(res)
        this.setState({data: res.data, isLoading: false})
        });
    }

    // componentDidMount(){
    //     this.setState({isloading: true});
    //     axios.get("http://localhost:3001/notes")
    //     .then((res) => {
    //     console.log(res)
    //     const data = res.data;
    //     this.setState({data, isLoading: false})
    //     });
    // }

    render(){ 
        console.log(this.state.data);
        if (this.state.isLoading) {
            return <p>Loading . . . . </p>;
        }
    return (
        <div className='notesContainer'>
            <h1>Your notes</h1>
            <ul>
                {this.state.data.map((note) => ( 
                <li key={note.id}>
                    {note.id}: 
                    FirstName: {note.firstname},
                    LastName: {note.lastname},
                    Mobile: {note.phone},
                    Role: {note.role},
                    Message: {note.message}
                </li>
                ))}
            </ul>
        </div>
    );
};
}

export default Notes;