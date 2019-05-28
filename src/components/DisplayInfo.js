import React, {Component} from 'react';

class DisplayInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlayer: ''
        }
    }

    fetchCurrentPlayerInfo(currentPlayer) {
        console.log('selected ' + currentPlayer)
        this.setState({
            currentPlayer
        })
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
                    return <h5 key={player.idPlayer} onClick={() => this.fetchCurrentPlayerInfo(player.strPlayer)}>{player.strPlayer}</h5>
                })}
            </div>
        )
    }
}

export default DisplayInfo;