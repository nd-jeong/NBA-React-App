import React, {Component} from 'react';

class DisplayPlayerInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const selectedPlayer = this.props.currentPlayerInfo.player
        return(
            <div>
                {selectedPlayer !== undefined ? 
                <div>
                    <h3>{selectedPlayer[0].strPlayer}</h3>
                    <img src={selectedPlayer[0].strThumb}></img>
                    <p>{selectedPlayer[0].strDescriptionEN}</p>
                    <p>Position: {selectedPlayer[0].strPosition}</p>
                    <p>Height: {selectedPlayer[0].strHeight}</p>
                    <p>Weight: {selectedPlayer[0].strWeight}</p>
                    <p>Birthday: {selectedPlayer[0].dateBorn}</p>
                    <p>Birthplace: {selectedPlayer[0].strBirthLocation}</p>
                </div>
                : <p></p>}
            </div>
        )
    }
}

export default DisplayPlayerInfo;