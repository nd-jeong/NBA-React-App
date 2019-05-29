import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import DisplayTeamInfo from './DisplayTeamInfo';

class SidebarTeamList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conference: '',
            selectedTeam: '',
            toggleMenu: false
        }
        this.conferenceToggle = this.conferenceToggle.bind(this);
        this.handleTeamClick = this.handleTeamClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    conferenceToggle(conference) {
        console.log(conference)
        this.setState({
            conference
        })
    }

    toggleMenu = () => {
        console.log(this.state.toggleMenu)
        this.setState(prevState => ({
            toggleMenu: !prevState.toggleMenu
        }))
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
                    <div className='conference-toggle' onClick={() => {this.conferenceToggle('West'); this.toggleMenu()}}>
                        <h2>Western Conference</h2>
                    </div>
                    <div className='conference-toggle' onClick={() => {this.conferenceToggle('East'); this.toggleMenu()}}>
                        <h2>Eastern Conference</h2>
                    </div>
                </div>
                <div className='team-list'>
                    {teams && teams.map(team => 
                        {if (team.conference === this.state.conference && this.state.toggleMenu === true) {
                            if (team.full_name === 'LA Clippers') {
                                return(
                                    <Link to='/Los Angeles Clippers' className='team-name' key={team.id} onClick={() => this.handleTeamClick('Los Angeles Clippers')}>Los Angeles Clippers</Link>
                                )
                            } else {
                                return(
                                    <Link to={`/${team.full_name}`} className='team-name' key={team.id} onClick={() => this.handleTeamClick(team.full_name)}>{team.full_name}</Link>
                                ) 
                            }
                        }}
                    )}
                </div>
                <main>
                    <Route path={`/${this.state.selectedTeam}`} currentTeam={this.props.currentTeam} render={() => (this.state.currentTeam ? <DisplayTeamInfo/> : null)}></Route>
                </main>
            </nav>
        )
    }  
}

export default SidebarTeamList;