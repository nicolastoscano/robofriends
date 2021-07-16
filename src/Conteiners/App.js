import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }


  render = () => {
    const {searchfield, robots} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });


    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <div className="content">
          <CardList robots={filteredRobots}/>
        </div>
      </div>
    );
  }
}

export default App;