import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            age: null,
            userType: null,
            contact: null,
            address: null,
            salary: null
        }
    }

    contactChangeHandler = (event) => {
        this.setState({contact: event.target.value});
      }

      addressChangeHandler = (event) => {
        this.setState({address: event.target.value});
      }

      salaryChangeHandler = (event) => {
        this.setState({salary: event.target.value});
      }

      submitHandler = (event) => {
        event.preventDefault();
        //alert("You are submitting " + this.state.contact + "," + this.state.address);
        axios.post('http://localhost:18085/user/employee', {
            contact: this.state.contact,
            address: this.state.address,
            salary: this.state.salary
        })
        .then(response => alert(response.body));
      }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
              <h1>Hello</h1>
              <p>Enter your contact:</p>
              <input
                type="text"
                onChange={this.contactChangeHandler}
              />
              <p>Enter your address:</p>
              <input
                type="text"
                onChange={this.addressChangeHandler}
              />
              <p>Enter your salary:</p>
              <input
                type="text"
                onChange={this.salaryChangeHandler}
              />
              <p>
              <input type='submit'/>
              </p>
            </form>
          );
    }

}