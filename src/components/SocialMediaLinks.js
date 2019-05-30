import React, {Component} from 'react';
import Link from '../images/link.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import YouTube from '../images/youtube.png';

class SocialMediaLinks extends Component {
    render() {
        console.log(this.props)
        return(
            <div className='social-media-container'>
                <a className='social-media-link' href={"https://" + this.props.teamWebsite} target='_blank'>
                    <img src={Link} alt="NBA.com"></img>
                </a>
                <a className='social-media-link' href={"https://" + this.props.teamFacebook} target='_blank'>
                    <img src={Facebook} alt='Facebook'></img>
                </a>
                <a className='social-media-link' href={"https://" + this.props.teamInstagram} target='_blank'>
                    <img src={Instagram} alt='Instagram'></img>
                </a>
                <a className='social-media-link' href={"https://" + this.props.teamTwitter} target='_blank'>
                    <img src={Twitter} alt='Twitter'></img>
                </a>
                <a className='social-media-link' href={"https://" + this.props.teamYoutube} target='_blank'>
                    <img src={YouTube} alt='YouTube'></img>
                </a>
            </div>
        )
    }
}

export default SocialMediaLinks;