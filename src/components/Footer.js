import twitterIcon from '../images/twitter-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import instagramIcon from '../images/instagram-icon.png';
import githubIcon from '../images/github-icon.png';

function Footer() {
    return (
      <div className="footer">
        <img src={twitterIcon} alt='Twitter Icon' className='social-media' />
        <img src={facebookIcon} alt='Facebook Icon' className='social-media' />
        <img src={instagramIcon} alt='Instagram Icon' className='social-media' />
        <img src={githubIcon} alt='Github Icon' className='social-media' />
      </div>
    );
  }
  
  export default Footer;