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
                <div>
                    <h2>Western Conference</h2>
                    <h2>Eastern Conference</h2>
                </div>
                <div>
                    {teams && teams.map(team => 
                        <h4 key={team.id}>{team.full_name}</h4>
                    )}
                </div>
            </div>
        )
    }  
}

export default TeamList