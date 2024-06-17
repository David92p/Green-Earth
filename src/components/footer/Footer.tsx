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
          <a href="https://www.linkedin.com/in/davide-panetta?original_referer=" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#0e76a8",}} className='icon'/>
          </a>
          <a href="https://github.com/David92p" target="_blank">
            <FontAwesomeIcon icon={faGithub} style={{color: "#171515",}} className='icon'/>
          </a>
          <a href="" target="_blank">
            <FontAwesomeIcon icon={faFacebook} style={{color: "#3b5998",}} className='icon'/>
          </a>
        </div>
      </div>
      <div className='footer-text'>
        <p className='text-lg'>© 2024 Green Earth. All rights reserved.</p>
        <p className='text-xl'>Created by Davide Panetta.</p>
      </div>
    </div>
  )
}

export default Footer
