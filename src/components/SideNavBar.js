import React, {Component} from 'react';

class SideNavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            conference: ''
        }
        this.conferenceToggle = this.conferenceToggle.bind(this);
    }
    
    conferenceToggle(filter) {
        console.log(filter)
        this.setState({
            filter
        })
    }

    render() {
        const teams = this.props.teamArray;
        console.log(teams)
        return(
            <div>
                <div>
                    <div onClick={() => this.conferenceToggle('West')}>
                        <h2>Western Conference</h2>
                    </div>
                    <div onClick={() => this.conferenceToggle('East')}>
                        <h2>Eastern Conference</h2>
                    </div>
                </div>
                <div>
                    {teams && teams.map(team => 
                        {if (team.conference === this.state.filter) {
                            return <h4 key={team.id}>{team.full_name}</h4>
                        }}
                    )}
                </div>
            </div>
        )
    }  
}

export default SideNavBar;