import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// style 
import "./footer.css"

const Footer:React.FC = () => {
  return (
    <div className='container-footer'>
      <div className='footer-links'>
        <p>Follow Me</p>
        <div>
          <FontAwesomeIcon icon={faLinkedin} style={{color: "#0e76a8",}} className='icon'/>
          <FontAwesomeIcon icon={faGithub} style={{color: "#171515",}} className='icon'/>
          <FontAwesomeIcon icon={faFacebook} style={{color: "#3b5998",}} className='icon'/>
        </div>
      </div>
      <div className='footer-text'>
        <p className='text-md'>© 2024 Green Earth. All rights reserved.</p>
        <p className='text-lg'>Created by Davide Panetta.</p>
      </div>
    </div>
  )
}

export default Footer
