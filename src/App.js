import React, { Component } from 'react'
import Catalog from './containers/Catalog'
import Filter from './containers/Filter'
import logo from './logo.svg'
import './App.css'

class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            is_filter_open: false
        }
    }

    setFilterOpen() {
        this.setState({
            is_filter_open: true
        })
    }

    setFilterClose() {
        this.setState({
            is_filter_open: false
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Pony App</h2>
                </div>
                <a className="filter-link" onClick={() => this.setFilterOpen()}>
                    Открыть фильтр
                </a>
                <Catalog />
                <Filter 
                    is_open={this.state.is_filter_open}
                    close={() => this.setFilterClose()}
                />
            </div>
        )
    }
}

export default App
