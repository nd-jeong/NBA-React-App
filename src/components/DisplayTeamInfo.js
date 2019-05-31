import React, {Component} from 'react';
import axios from 'axios';
import DisplayPlayerInfo from './DisplayPlayerInfo';
import {Link, Route} from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks';

class DisplayTeamInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlayer: '',
            currentPlayerInfo: [],
            currentPlayerCheck: false,
            displayPlayerInfo: false
        }
        this.fetchCurrentPlayerInfo = this.fetchCurrentPlayerInfo.bind(this);
        this.togglePlayerInfo = this.togglePlayerInfo.bind(this);
        this.outsideClick = this.outsideClick.bind(this);
    }

    async fetchCurrentPlayerInfo(currentPlayer) {
        await this.setState({
            currentPlayer,
            currentPlayerCheck: true
        })

        if (this.state.currentPlayerCheck === true) {
            await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${this.state.currentPlayer}`)
                .then( res => {
                    this.setState({
                        currentPlayerInfo: res.data
                    })
                })
        }
    }

    // Used https://codepen.io/graubnla/pen/EgdgZm for closing the modal on clicking outisde

    togglePlayerInfo() {
        if (!this.state.displayPlayerInfo) {
            document.addEventListener('click', this.outsideClick, false);
        } else {
            document.removeEventListener('click', this.outsideClick, false);
        }
        this.setState(prevState => ({
            displayPlayerInfo: !prevState.displayPlayerInfo
        }))
    }

    outsideClick(event) {
        if (this.node.contains(event.target)) {
            return;
        }
        this.togglePlayerInfo();
    }

    render() {
        const teamSelected = this.props.currentTeamInfo[0];
        const roster = this.props.currentTeamRoster.player;

        return(
            <div className='team-info-display'>
                <header>
                    {teamSelected ? <img src={teamSelected.strTeamBanner} className='team-banner' alt={this.props.currentTeam + "'s banner"}></img> : null}
                </header>
                {teamSelected ? <p className='team-summary'>{teamSelected.strDescriptionEN}</p> : null}
                <div>
                    {teamSelected ? 
                    <SocialMediaLinks
                        teamYoutube={teamSelected.strYoutube}
                        teamFacebook={teamSelected.strFacebook}
                        teamTwitter={teamSelected.strTwitter}
                        teamInstagram={teamSelected.strInstagram}
                        teamWebsite={teamSelected.strWebsite}
                        teamSelected={teamSelected}
                    /> : null}
                </div>
                <div className='roster-list'>
                    {roster && roster.map(player => {
                        if (player.strPosition === 'Manager') {
                            return; 
                        } else {
                            return(
                                <div className='player-link-container' key={player.idPlayer} ref={node => {this.node = node;}}>
                                    <Link 
                                        to={`/${this.props.currentTeam}/${player.strPlayer}`} className='player-link' 
                                        onClick={() => {this.fetchCurrentPlayerInfo(player.strPlayer); this.togglePlayerInfo()}}>
                                        <img 
                                            src={player.strCutout} 
                                            className='player-portrait' 
                                            alt={player.strPlayer}>
                                        </img>
                                        <h4 className='player-name'>{player.strPlayer}</h4>
                                    </Link>
                                </div>
                            ) 
                        }
                    })}
                </div>
                <main>
                    <Route 
                        path={`/${this.props.currentTeam}/${this.state.currentPlayer}`} 
                        render={() => (this.state.displayPlayerInfo === true ? 
                        <DisplayPlayerInfo
                            currentPlayerInfo={this.state.currentPlayerInfo}
                            currentPlayer={this.state.currentPlayer}
                        /> : null)
                    }/>
                </main>
            </div>
        )
    }
}

export default DisplayTeamInfo;