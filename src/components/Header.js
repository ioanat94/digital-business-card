import profilePicture from '../images/profile-picture.png';

function Header() {
    return (
      <div className="header">
        <img src={profilePicture} alt='Young Woman' />
      </div>
    );
  }
  
  export default Header;