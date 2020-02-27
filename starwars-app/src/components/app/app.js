import React, { Component } from "react";

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './app.css';

class App extends Component {

    state = {
        selectedItem: null,
        error: false
    };

    onSelectedItem = (id) => {
        // console.log(id);
        this.setState({
            selectedItem: id
        });

    };

    componentDidCatch() {
        this.setState({
            error: true
        });
    };

    render() {
        if(this.state.error){
            return <ErrorIndicator/>
        }

        return (
            <div>
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onSelectedItem={this.onSelectedItem} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails selectedItem={this.state.selectedItem}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

