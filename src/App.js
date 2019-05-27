import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import SidebarTeamList from './components/SidebarTeamList';
import DisplayInfo from './components/DisplayInfo';

class App extends Component {
    constructor() {
        super();

        this.state = {
            allTeamsInfo: [],
            allTeamsList: [],
            currentTeam: [],
            currentTeamInfo: [],
            currentTeamCheck: false
        }
        this.fetchCurrentTeam = this.fetchCurrentTeam.bind(this);
    }

    async componentDidMount() {
        await axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA')
            .then(res => {
                this.setState({
                    allTeamsInfo: res.data
                })
            })
        

        // if (this.state.currentTeamCheck == true) {
        //     await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.state.currentTeam}`)
        //     .then(res => {
        //         this.setState({
        //             currentTeamInfo: res,
        //             currentTeamCheck: false
        //         })
        //     })
        // }
        


        await axios.get('https://www.balldontlie.io/api/v1/teams')
            .then(res => {
                this.setState({
                    allTeamsList: res.data.data
                })
            })
    }

    async fetchCurrentTeam(currentTeam) {
        console.log('selected ' + currentTeam)
        this.setState({
            currentTeam,
            currentTeamCheck: true
        })
        const currentTeamSearch = this.state.currentTeam;
        console.log(currentTeamSearch);
        const res = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${currentTeamSearch}`);
        this.setState({
            currentTeamInfo: res
        })

    }

    render() {
        const teamArray = this.state.allTeamsList;
        
        return(
            <div>
                <SidebarTeamList
                    teamArray={teamArray}
                    fetchCurrentTeam={this.fetchCurrentTeam}
                />
            </div>
        )
    }
}

export default App;
