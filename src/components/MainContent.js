import emailIcon from '../images/email-icon.png'
import linkedinIcon from '../images/linkedin-icon.png'

function MainContent() {
    return (
      <div className="main-content">
        <h2>Laura Smith</h2>
        <h5>Frontend Developer</h5>
        <p>laurasmith.website</p>
        <button><img src={emailIcon} alt='Email Icon' />Email</button>
        <button><img src={linkedinIcon} alt='LinkedIn Icon' />LinkedIn</button>
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3>Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
    );
  }
  
  export default MainContent;