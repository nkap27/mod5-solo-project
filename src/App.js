import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Filter from './components/Filter'
import MissingList from './components/MissingList'

class App extends Component {

  state = {
    children: [],
    search: '',
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  displayChildren = () => {
    const filteredChildren = this.state.children.filter(
      child => child.name.toLowerCase().includes(this.state.search.toLowerCase())
      || child.city.toLowerCase().includes(this.state.search.toLowerCase())
    )
    return filteredChildren
  }


  render() {
    return (
      <>
        <NavBar/>
        <Filter handleChange={this.handleChange}/>
        <MissingList children={this.displayChildren()}/>
      </>
    )
  }

  componentDidMount(){
    fetch('http://localhost:3000/posts')
      .then(resp=>resp.json())
      .then(data=>this.setState({
        children:data
      }))
    }
}

export default App;
