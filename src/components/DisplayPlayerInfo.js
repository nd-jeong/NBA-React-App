import React, {Component} from 'react';

class DisplayPlayerInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {console.log(this.props.currentPlayerInfo.player)}
            </div>
        )
    }
}

export default DisplayPlayerInfo;