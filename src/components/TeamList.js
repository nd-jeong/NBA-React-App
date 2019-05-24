import React, {Component} from 'react';

class TeamList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const teams = this.props.teamArray;
        console.log(teams)
        return(
            <div>
                {teams && teams.map(team => 
                    <h2>{team.strTeam}</h2>
                )}
            </div>
        )
    }  
}

export default TeamList