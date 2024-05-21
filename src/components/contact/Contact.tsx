import React, { useState } from 'react'
// img
import contact1 from "../../assets/images/contact-1.jpg"
// style 
import "./contact.css"
import { Button } from "../index"
import axios from 'axios';

const Contact:React.FC = () => {
  
  const [user_name, setUser_name] = useState<string>("");
  const [user_surname, setUser_surname] = useState<string>("");
  const [user_email, setUser_email] = useState<string>("");
  const [user_message, setUser_messae] = useState<string>("");
  const [user_check, setUser_check] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const DATA = {
      service_id: import.meta.env.VITE_APP_SERVICE_ID,
      template_id: import.meta.env.VITE_APP_TEMPLATE_ID,
      user_id: import.meta.env.VITE_APP_PUBLIC_KEY,
      template_params: {
        user_name,
        user_surname,
        user_email,
        user_message,
      },
    };
    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", DATA);
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
    finally {
      setUser_name("");
      setUser_surname("");
      setUser_email("");
      setUser_messae("");
      setUser_check(false);
    }
  };

  return (
    <div className="container-contact" id="contact">
      <p className='title-contact'>Contact</p>
      <div className='form-contact-container'>
        <div className="contact-graphics">
          <img
            src={contact1}
            alt="Contact-1"
          />
          <div>
            <p>
              Do you have questions about the project or want to propose me
              a collaboration? Contact me by filling out the form, I will reply as soon as possible.
              Kind regards from Green Earth!
            </p>
          </div>
        </div>
        <div className="form-contact 2xl:py-auto">
          {!success && !error ? (
            <form onSubmit={handleSubmit} >
              <div className="contact-container-input sm:grid grid-cols-2">
                <input
                  value={user_name}
                  name="user_name"
                  onChange={(e) => setUser_name(e.target.value)}
                  placeholder={"name"}
                  type="text"
                  required
                />
                <input
                  value={user_surname}
                  name="user_surname"
                  onChange={(e) => setUser_surname(e.target.value)}
                  placeholder={"surname"}
                  type="text"
                  required
                />
              </div>
              <div className="contact-container-input">
                <input
                  value={user_email}
                  name="user_email"
                  onChange={(e) => setUser_email(e.target.value)}
                  placeholder={"email"}
                  type="email"
                  required
                  className="mb-6"
                />
                <textarea
                  value={user_message}
                  name="user_message"
                  onChange={(e) => setUser_messae(e.target.value)}
                  placeholder={"message ..."}
                  required
                  maxLength={500}
                ></textarea>
              </div>
              <div className="contact-container-termofuse">
                <input
                  required
                  checked={user_check}
                  onChange={(e) => setUser_check(e.target.checked)}
                  type="checkbox"
                  name="check"
                  id="check"
                />
                <span>
                  {" "}
                  I accept the{" "}
                  <a href="">
                    terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="contact-container-btn">
								<Button name="Send"/>
              </div>
            </form>
          ) : success ? (
            <div
              onClick={() => setSuccess(false)}
              className="contact-response bg-mygreen my-[50%]"
            >
              Success
            </div>
          ) : (
            <div
              onClick={() => setError(false)}
              className="contact-response bg-red-400 my-[50%]"
            >
              Error
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
