import React, {Component} from 'react';
import Link from '../images/link.png';
import Facebook from '../images/facebook.png';
import Instagram from '../images/instagram.png';
import Twitter from '../images/twitter.png';
import YouTube from '../images/youtube.png';

class SocialMediaLinks extends Component {
    render() {
        return(
            <div className='social-media-container'>
                <a className='social-media-link' href={"https://" + this.props.teamWebsite} target='_blank' rel="noopener noreferrer">
                    <img src={Link} alt="NBA.com"></img>
                </a>
                <a className='social-media-link' href={"https://" + this.props.teamFacebook} target='_blank' rel="noopener noreferrer">
                    <img src={Facebook} alt='Facebook'></img>
                </a>
                <a className='social-media-link' href={"https://" + this.props.teamInstagram} target='_blank' rel="noopener noreferrer">
                    <img src={Instagram} alt='Instagram'></img>
                </a>
                <a className='social-media-link' href={"https://" + this.props.teamTwitter} target='_blank' rel="noopener noreferrer">
                    <img src={Twitter} alt='Twitter'></img>
                </a>
                <a className='social-media-link' href={"https://" + this.props.teamYoutube} target='_blank' rel="noopener noreferrer">
                    <img src={YouTube} alt='YouTube'></img>
                </a>
            </div>
        )
    }
}

export default SocialMediaLinks;