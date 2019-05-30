import React, {Component} from 'react';
import Domain from '../images/domain.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import YouTube from '../images/youtube.png';

class SocialMediaLinks extends Component {
    render() {
        console.log(this.props)
        return(
            <div>
                <a href={"https://" + this.props.teamWebsite} target='_blank'>
                    <img src={Domain}></img>
                </a>
                <a href={"https://" + this.props.teamFacebook} target='_blank'>
                    <img src={Facebook}></img>
                </a>
                <a href={"https://" + this.props.teamInstagram} target='_blank'>
                    <img src={Instagram}></img>
                </a>
                <a href={"https://" + this.props.teamTwitter} target='_blank'>
                    <img src={Twitter}></img>
                </a>
                <a href={"https://" + this.props.teamYoutube} target='_blank'>
                    <img src={YouTube}></img>
                </a>
            </div>
        )
    }
}

export default SocialMediaLinks;