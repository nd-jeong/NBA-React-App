import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import TeamList from './components/TeamList'

class App extends Component {
    constructor() {
        super();

        this.state = {
            allTeamsInfo: [],
            allTeamsList: []
        }
    }

    async componentDidMount() {
        await axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA')
            .then(res => {
                this.setState({
                    allTeamsInfo: res.data
                })
            })
        const fetchPlayerData = await axios.get('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Toronto Raptors');
        await axios.get('https://www.balldontlie.io/api/v1/teams')
            .then(res => {
                this.setState({
                    allTeamsList: res.data.data
                })
            })
    }

    render() {
        const teamArray = this.state.allTeamsList;
        
        return(
            <div>
                <TeamList
                    teamArray={teamArray}
                />
            </div>
        )
    }
}

export default App;
