import React, {Component} from 'react';

class SidebarTeamList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conference: ''
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
    }

    render() {
        const teams = this.props.teamArray;
        console.log(teams)
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
                <div>
                    {teams && teams.map(team => 
                        {if (team.conference === this.state.conference) {
                            if (team.full_name === 'LA Clippers') {
                                return <h4 key={team.id} value={team.full_name} onClick={() => this.handleTeamClick('Los Angeles Clippers')}>Los Angeles Clippers</h4>
                            } else {
                                return <h4 key={team.id} value={team.full_name} onClick={() => this.handleTeamClick(team.full_name)}>{team.full_name}</h4>
                            }
                        }}
                    )}
                </div>
            </nav>
        )
    }  
}

export default SidebarTeamList