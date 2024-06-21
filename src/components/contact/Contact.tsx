import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

// img
import contact1 from "../../assets/images/contact-1.jpg"
// style 
import "./contact.css"
import { Button, Pending } from "../index"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

type FormValuesType = {
  name: string
  surname: string 
  email: string
  textarea: string
  check: boolean
}

type ProgressStatusFormType = {
  success: boolean
  loading: boolean
  error: boolean
}

const Contact:React.FC = () => {

  const form = useForm<FormValuesType>()
  
	const { register, control, handleSubmit, formState, setValue } = form
	const { errors } = formState
  
  const [progressStatusForm, setProgressStatusForm] = useState<ProgressStatusFormType>({success: false, loading: false, error: false})

	const onSubmit = async (data:FormValuesType) => {
    setProgressStatusForm({success: false, loading: true, error: false})
    console.log(data)
    const { name:user_name, surname:user_surname, email:user_email, textarea:user_message } = data
    const REQUEST = {
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
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", REQUEST);
      setProgressStatusForm({success: true, loading: false, error: false})
    } catch (error) {
      setProgressStatusForm({success: false, loading: false, error: true})
    }
    finally {
      setProgressStatusForm((prevStatus:ProgressStatusFormType) => {
        return { ...prevStatus, loading: false }
      })
    }
    setValue("name", "")
    setValue("surname", "")
    setValue("email", "")
    setValue("textarea", "")
    setValue("check", false)
  };

  return (
    <div className="container-contact">
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
          {
            !progressStatusForm.error && !progressStatusForm.loading && !progressStatusForm.success && (
              <>
                <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="contact-container-input sm:grid sm-grid-cols-1 sm:grid-row-4">
                    <input
                      type='text'
                      id="name"
                      { ...register("name",
                        {
                          required: {value: true, message: "Name is Required"}
                        }
                      )}
                      placeholder={"name"}
                    />
                    <p>{ errors.name?.message }</p>
                    <input
                      type='text'
                      id="surname"
                      { ...register("surname",
                        {
                          required: {value: true, message: "Surname is Required"}
                        }
                      )
                      }
                      placeholder={"surname"}
                    />
                    <p>{ errors.surname?.message }</p>
                  </div>
                  <div className="contact-container-input">
                    <input
                      placeholder={"email"}
                      type="email"
                      id='email'
                      { ...register("email",
                        {
                          required: {value: true, message: "Email is Required"},
                          pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
<<<<<<< Updated upstream
                            message: "Invalid Email format"
                          }
                        }
                      )}
                      className="mb-6"
=======
                            message: "Invalid Email - format example@gmail.com"
                          }
                        }
                      )}
>>>>>>> Stashed changes
                    />
                    <p>{ errors.email?.message }</p>
                    <textarea
                      id='textarea'
                      { ...register("textarea",
                        {required: {value: true, message: "Enter your message here to continue"},}
                      )}
                      placeholder={"message ..."}
                      maxLength={500}
                    ></textarea>
                    <p>{ errors.textarea?.message }</p>
                  </div>
                  <div className="contact-container-termofuse">
                    <div>
                      <input
                        type="checkbox"
                        id="check"
                        { ...register("check",
                          {required: {value: true, message: "Accept the terms and conditions"},}
                        )}
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
                    <p>{ errors.check?.message }</p>
                  </div>
                  <div className="contact-container-btn">
                    <Button name="Send"/>
                  </div>
                </form>
                <DevTool control={control}/>
              </>
            )
          }
          {
            progressStatusForm.error && (
              <div className='contact-response' onClick={() => setProgressStatusForm({success: false, loading: false, error: false})}>
<<<<<<< Updated upstream
              <Pending type="error" />
=======
                <Pending type="error-form" />
>>>>>>> Stashed changes
              </div>
            )
          }
          {
            progressStatusForm.loading && (
            <div className='contact-response' onClick={() => setProgressStatusForm({success: false, loading: false, error: false})}>
              <Pending type="loading-form" />
            </div>
            )
          }
          {
            progressStatusForm.success && (
              <div
                onClick={() => setProgressStatusForm({success: false, loading: false, error: false})}
                className="contact-response bg-mygreen my-[50%] sm:my-0"
              >
                <span className='text-mysecondyellow'>Success!{"  "}<FontAwesomeIcon icon={faLeaf} style={{color: "#63E6BE"}} size='xl' /></span>
                <div>
                  Thank you for contacting us, we will be happy to respond as soon as possible. <br/> See you soon from GreenEarth!
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Contact
