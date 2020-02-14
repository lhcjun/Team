import React, { Component } from 'react';
import logo from '../logo.svg';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';


import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchField: '',
      members: [],
    }
  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(user => this.setState({members: user}))
  }

  onSearchChange = (event) => {
    this.setState( { searchField: event.target.value } )
  }

  render(){
    const filterMembers = this.state.members.filter( member => {
      return member.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    return (
      <div>
        <h1>Our Team</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <CardList members = {filterMembers}/>
      </div>
      )
  }
}

export default App;
