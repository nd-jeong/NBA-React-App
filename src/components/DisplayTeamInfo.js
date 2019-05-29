import React, {Component} from 'react';
import axios from 'axios';
import DisplayPlayerInfo from './DisplayPlayerInfo';
import {Link, Route} from 'react-router-dom';

class DisplayTeamInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlayer: '',
            currentPlayerInfo: [],
            currentPlayerCheck: false
        }
        this.fetchCurrentPlayerInfo = this.fetchCurrentPlayerInfo.bind(this);
    }

    async fetchCurrentPlayerInfo(currentPlayer) {
        console.log('selected ' + currentPlayer)
        await this.setState({
            currentPlayer,
            currentPlayerCheck: true
        })

        if (this.state.currentPlayerCheck == true) {
            await axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${this.state.currentPlayer}`)
                .then( res => {
                    this.setState({
                        currentPlayerInfo: res.data
                    })
                })
        }
    }

    render() {
        const teamSelected = this.props.currentTeamInfo[0];
        const roster = this.props.currentTeamRoster.player;

        return(
            <div className='team-info-display'>
                <header>
                    {teamSelected ? <img src={teamSelected.strTeamBanner}></img> : null}
                </header>
                {teamSelected ? teamSelected.strDescriptionEN : null}
                <div className='roster-list'>
                    {roster && roster.map(player => {
                        if (player.strPosition === 'Manager') {
                            return 
                        } else {
                            return(
                                <Link to={`/${this.props.currentTeam}/${player.strPlayer}`} key={player.idPlayer} onClick={() => this.fetchCurrentPlayerInfo(player.strPlayer)}>
                                    <img src={player.strCutout} className='player-portrait'></img>
                                    <h5>{player.strPlayer}</h5>
                                </Link>
                            ) 
                        }
                    
                    })}
                </div>
                <main>
                    <Route path={`/${this.props.currentTeam}/${this.state.currentPlayer}`} render={() => 
                        <DisplayPlayerInfo
                            currentPlayerInfo={this.state.currentPlayerInfo}
                        />
                    }/>
                </main>
            </div>
        )
    }
}

export default DisplayTeamInfo;