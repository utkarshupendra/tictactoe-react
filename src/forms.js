import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            age: null,
            userType: null,
            contact: null,
            address: null,
            salary: null,
            submitted: false
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
        //var id = this.state.id;
        //alert("You are submitting " + this.state.contact + "," + this.state.address);
        axios.get('http://localhost:18085/user/employee/'+this.state.id)
        .then(response => {
            console.log(response);
            //alert(response.data.contact +',' + response.data.address);
            this.setState({submitted: true, contact: response.data.contact, address: response.data.address});
            console.log('Latest: '+this.state.contact);
        });
      }

    idChangeHandler = (event) => {
        this.setState({id: event.target.value});
    }

    render() {
        return (<div>
            <form onSubmit={this.submitHandler}>
              <h1>Hello</h1>
              <p>Enter your Employee ID:</p>
              <input
                type="text"
                onChange={this.idChangeHandler}
              />
              {/* <p>Enter your address:</p>
              <input
                type="text"
                onChange={this.addressChangeHandler}
              />
              <p>Enter your salary:</p>
              <input
                type="text"
                onChange={this.salaryChangeHandler}
              />
               */}
               <p>
              <input type='submit'/>
              </p>
            </form>
            {this.state.submitted && <Employee value = {this.state}/>}
            </div>
          );
    }

}

function Employee(props) {
    console.log('Employee: '+props);
    return (
    <div>
    <p>Contact: {props.value.contact}</p>
    <p>Address: {props.value.address}</p>
    </div>
    )
}