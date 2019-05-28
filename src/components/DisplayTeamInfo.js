import React, {Component} from 'react';
import axios from 'axios';
import DisplayPlayerInfo from './DisplayPlayerInfo';

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
        console.log(teamSelected);

        return(
            <div>
                <header>
                    {teamSelected ? <img src={teamSelected.strTeamBanner}></img> : <p></p>}
                </header>
                {teamSelected ? teamSelected.strDescriptionEN : <p></p>}
                {roster && roster.map(player => {
                    if (player.strPosition === 'Manager') {
                        return 
                    } else {
                        return(
                            <div>
                                <img src={player.strCutout} className='player-portrait'></img>
                                <h5 key={player.idPlayer} onClick={() => this.fetchCurrentPlayerInfo(player.strPlayer)}>{player.strPlayer}</h5>
                            </div>
                        ) 
                    }
                    
                })}
                <DisplayPlayerInfo
                    currentPlayerInfo={this.state.currentPlayerInfo}
                />
            </div>
        )
    }
}

export default DisplayTeamInfo;