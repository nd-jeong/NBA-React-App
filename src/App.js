import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import SidebarTeamList from './components/SidebarTeamList';
import DisplayTeamInfo from './components/DisplayTeamInfo';

class App extends Component {
    constructor() {
        super();

        this.state = {
            allTeamsInfo: [],
            allTeamsList: [],
            currentTeam: [],
            currentTeamInfo: [],
            currentTeamRoster: [],
            currentTeamCheck: false
        }
        this.fetchCurrentTeam = this.fetchCurrentTeam.bind(this);
    }

    async componentDidMount() {
        // await axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NBA')
        //     .then(res => {
        //         this.setState({
        //             allTeamsInfo: res.data
        //         })
        //     })
        
        await axios.get('https://www.balldontlie.io/api/v1/teams')
            .then( res => {
                this.setState({
                    allTeamsList: res.data.data
                })
            })
    }

    async fetchCurrentTeam(currentTeam) {
        console.log('selected ' + currentTeam)
        await this.setState({
            currentTeam,
            currentTeamCheck: true
        })

        const currentTeamSearch = this.state.currentTeam;

        if (this.state.currentTeamCheck === true) {
            const resOne = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${currentTeamSearch}`);
            const resTwo = await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${currentTeamSearch}`);
            this.setState({
                currentTeamInfo: resOne.data.teams,
                currentTeamRoster: resTwo.data
            })
        }
    }

    render() {
        const teamArray = this.state.allTeamsList;
        const currentTeam = this.state.currentTeam;
        const currentTeamInfo = this.state.currentTeamInfo;
        const currentTeamRoster = this.state.currentTeamRoster;
        
        return(
            <div>
                <header className='page-header'>
                    <h1>NBA React App</h1>
                </header>
                <div className='App'>
                    <SidebarTeamList
                        teamArray={teamArray}
                        fetchCurrentTeam={this.fetchCurrentTeam}
                    />
                    <DisplayTeamInfo
                        currentTeam={currentTeam}
                        currentTeamInfo={currentTeamInfo}
                        currentTeamRoster={currentTeamRoster}
                    />
                    <div className='introduction-container'>
                        {this.state.currentTeamCheck === false ? <h1 className="introduction">To begin, select a conference and then select a specific team.</h1> : null}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default App;
