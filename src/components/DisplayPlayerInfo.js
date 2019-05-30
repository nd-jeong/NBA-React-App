import React, {Component} from 'react';

class DisplayPlayerInfo extends Component {
    render() {
        const selectedPlayer = this.props.currentPlayerInfo.player;
        return(
            <div className='player-info-window'>
                {selectedPlayer !== undefined ? 
                <div className='player-info-container'>
                    <h1 className='player-info-name'>{selectedPlayer[0].strPlayer}</h1>
                    <div className='player-picture-description'>
                        <img className='player-info-picture' src={selectedPlayer[0].strThumb} alt={selectedPlayer[0].strPlayer}></img>
                        <div className='player-info-categories'>
                            <p><span className='player-category'>Position:</span> {selectedPlayer[0].strPosition}</p>
                            <p><span className='player-category'>Height:</span> {selectedPlayer[0].strHeight}</p>
                            <p><span className='player-category'>Weight:</span> {selectedPlayer[0].strWeight}</p>
                            <p><span className='player-category'>Birthday:</span> {selectedPlayer[0].dateBorn}</p>
                            <p><span className='player-category'>Birthplace:</span> {selectedPlayer[0].strBirthLocation}</p>
                        </div>
                    </div>    
                    <p className='player-info-description'>{selectedPlayer[0].strDescriptionEN}</p>
                </div>
                : null}
            </div>
        )
    }
}

export default DisplayPlayerInfo;