import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import SmurfList from '../components/SmurfsList';
import SmurfForm from './SmurfForm'

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    const { smurfs } = this.props;
    return (
      <div className="App">
      <SmurfForm />
      <SmurfList smurfs={smurfs}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    // fetchingSmurfs: state.fetchingSmurfs,
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);
