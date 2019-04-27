import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  state = {
    newSmurf: {
      name: '',
      age: '',
      height: '',
      id: ''
    }
  };

  SubmitHandler = () => {

    this.props.addSmurf(this.state);
    this.setState({ name: '', age: '', height: '', id: Date.now() });
  };

  HandleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>SmurfList</h1>
        <form onSumbit={this.SubmitHandler}>
          <input
            type="name"
            name="name"
            onChange={this.HandleInputChange}
            value={this.state.name}
            placeholder="Name"
          />

          <input
            type="age"
            name="age"
            onChange={this.HandleInputChange}
            value={this.state.Age}
            placeholder="Age"
          />

          <input
            type="height"
            name="height"
            onChange={this.HandleInputChange}
            value={this.state.height}
            placeholder="Height"
          />

          <button onClick={() => this.SubmitHandler()}>Join the Village</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(SmurfForm);
