import React, {Component} from 'react';

class DisplayInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const teamSelected = this.props.currentTeamInfo[0];
        console.log(teamSelected);
        return(
            <div>

            </div>
        )
    }
}

export default DisplayInfo;