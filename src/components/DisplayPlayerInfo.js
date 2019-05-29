import React, {Component} from 'react';

class DisplayPlayerInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const selectedPlayer = this.props.currentPlayerInfo.player;
        console.log(selectedPlayer);
        return(
            <div className='player-info-window'>
                {selectedPlayer !== undefined ? 
                <div>
                    <h1>{selectedPlayer[0].strPlayer}</h1>
                    <img className='player-picture' src={selectedPlayer[0].strThumb}></img>
                    <p>{selectedPlayer[0].strDescriptionEN}</p>
                    <p>Position: {selectedPlayer[0].strPosition}</p>
                    <p>Height: {selectedPlayer[0].strHeight}</p>
                    <p>Weight: {selectedPlayer[0].strWeight}</p>
                    <p>Birthday: {selectedPlayer[0].dateBorn}</p>
                    <p>Birthplace: {selectedPlayer[0].strBirthLocation}</p>
                </div>
                : null}
            </div>
        )
    }
}

export default DisplayPlayerInfo;