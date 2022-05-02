import emailIcon from '../images/email-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'

function MainContent() {
    return (
      <div className="main-content">
        <div className='personal-info'>
          <h2 className='name'>Laura Smith</h2>
          <h5 className='occupation'>Frontend Developer</h5>
          <p className='website'>laurasmith.website</p>
        </div>
        <div className='contact'>
          <button type='button' className='email-button'><img src={emailIcon} alt='Email Icon' className='email-icon' />Email</button>
          <button className='linkedin-button'><img src={linkedinIcon} alt='LinkedIn Icon' className='linkedin-icon' />LinkedIn</button>
        </div>
        <div className='about'>
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h3>Interests</h3>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>
    );
  }
  
  export default MainContent;