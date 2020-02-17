import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestMembers } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';


const mapStateToProps = state => {
  return {
    searchField: state.searchMembers.searchField,
    members: state.findMembers.members,
    isPending: state.findMembers.isPending,
    error: state.findMembers.error
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestMembers: () => dispatch(requestMembers())
  }
}
class App extends Component {
  componentDidMount(){
      this.props.onRequestMembers();
  }
  render(){
    const { searchField, onSearchChange, members, isPending } = this.props;
    const filterMembers = members.filter( member => {
      return member.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1 className = "f1 tc">Loading...</h1> :
    (
        <div className='tc'>
          <h1 className = "f1" id="title">Our Team</h1>
          <SearchBox searchChange = { onSearchChange }/>
          <Scroll>
            <ErrorBoundary>
              <CardList members = { filterMembers }/>
            </ErrorBoundary>
          </Scroll>
        </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
