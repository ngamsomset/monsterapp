import './App.css'
import React, { Component } from 'react'
import { CardList } from '../components/CardList'
import SearchBox from '../components/SearchBox'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  onsearchchange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1 className="heading">MonstersSs</h1>
        <SearchBox
          placeholder="search monster"
          handlechange={this.onsearchchange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    )
  }
}

export default App
