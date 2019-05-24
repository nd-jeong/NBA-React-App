import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';

class App extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    async componentDidMount() {
        const fetchTeamData = await axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA');
        const fetchPlayerData = await axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Toronto Raptors');
        console.log(fetchPlayerData)
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default App;
