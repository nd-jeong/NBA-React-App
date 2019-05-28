import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import DisplayTeamInfo from './DisplayTeamInfo';

class SidebarTeamList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conference: '',
            selectedTeam: ''
        }
        this.conferenceToggle = this.conferenceToggle.bind(this);
        this.handleTeamClick = this.handleTeamClick.bind(this);
    }
    
    conferenceToggle(conference) {
        console.log(conference)
        this.setState({
            conference
        })
    }

    handleTeamClick(currentTeam) {
        this.props.fetchCurrentTeam(currentTeam);
        this.setState({
            selectedTeam: currentTeam
        })
    }

    render() {
        const teams = this.props.teamArray;
        
        return(
            <nav>
                <div>
                    <div onClick={() => this.conferenceToggle('West')}>
                        <h2>Western Conference</h2>
                    </div>
                    <div onClick={() => this.conferenceToggle('East')}>
                        <h2>Eastern Conference</h2>
                    </div>
                </div>
                <div className='team-list'>
                    {teams && teams.map(team => 
                        {if (team.conference === this.state.conference) {
                            if (team.full_name === 'LA Clippers') {
                                return(
                                    <Link to='/Los Angeles Clippers' key={team.id} onClick={() => this.handleTeamClick('Los Angeles Clippers')}>Los Angeles Clippers</Link>
                                )
                            } else {
                                return(
                                    <Link to={team.full_name} key={team.id} onClick={() => this.handleTeamClick(team.full_name)}>{team.full_name}</Link>
                                ) 
                            }
                        }}
                    )}
                </div>
                <main>
                    <Route path={this.state.selectedTeam} ></Route>
                </main>
            </nav>
        )
    }  
}

export default SidebarTeamList;