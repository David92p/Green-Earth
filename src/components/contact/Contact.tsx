import React, { useState } from 'react'

import contact1 from "../../assets/images/contact-1.jpg"

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
    <div className="flex flex-col justify-center items-center bg-myfirstyellow font-mytitlefont">
      <p className='text-mygreen text-4xl sm:text-5xl font-bold tracking-wider text-center sm:pt-6'>Contact</p>
      <div className='flex flex-col-reverse sm:flex-row 2xl:w-3/5 2xl:h-auto m-6 sm:m-8 rounded-2xl'>
        <div className="sm:w-2/5 bg-gradient-to-br from-amber-800 to-amber-500 relative rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none">
          <img
            src={contact1}
            alt="Contact-1"
            className="w-[100%] h-[100%] object-cover absolute mix-blend-soft-light rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none"
          />
          <div className="p-10 sm:h-full">
            <p className="text-slate-100 text-xl sm:text-2xl text-center font-semibold tracking-wide leading-10 sm:py-[50%]">
              Do you have questions about the project or want to propose me
              a collaboration? Contact me by filling out the form, I will reply as soon as possible.
              Kind regards from Green Earth!
            </p>
          </div>
        </div>
        <div className="sm:w-3/5 bg-amber-200 p-4 sm:py-20 2xl:py-auto rounded-t-2xl sm:rounded-r-2xl sm:rounded-l-none">
          {!success && !error ? (
            <form onSubmit={handleSubmit} >
              <div className="flex flex-col sm:grid grid-cols-2 gap-4 mb-6">
                <input
                  value={user_name}
                  name="user_name"
                  onChange={(e) => setUser_name(e.target.value)}
                  placeholder={"name"}
                  type="text"
                  required
                  className="border border-mygreen focus:border-2 focus:border-mygreen py-1 px-2 text-slate-900 focus:outline-none rounded-md"
                />
                <input
                  value={user_surname}
                  name="user_surname"
                  onChange={(e) => setUser_surname(e.target.value)}
                  placeholder={"surname"}
                  type="text"
                  required
                  className="border border-mygreen focus:border-2 focus:border-mygreen py-1 px-2 text-slate-900 focus:outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col mt-5 gap-4 mb-6">
                <input
                  value={user_email}
                  name="user_email"
                  onChange={(e) => setUser_email(e.target.value)}
                  placeholder={"email"}
                  type="email"
                  required
                  className="border border-mygreen focus:border-2 focus:border-mygreen py-1 px-2 mb-6 text-slate-900 focus:outline-none rounded-md"
                />
                <textarea
                  value={user_message}
                  name="user_message"
                  onChange={(e) => setUser_messae(e.target.value)}
                  placeholder={"message ..."}
                  required
                  maxLength={500}
                  className="py-1 px-2 h-48 border border-mysecondyellow-800 resize-none text-slate-900 focus:outline-none border-mygreen focus:border-2 focus:border-mygreen  rounded-md"
                ></textarea>
              </div>
              <div className="mt-5 flex justify-center text-slate-900">
                <input
                  required
                  checked={user_check}
                  onChange={(e) => setUser_check(e.target.checked)}
                  type="checkbox"
                  name="check"
                  id="check"
                  className="border border-amber-800 mr-4"
                />
                <span>
                  {" "}
                  I accept the{" "}
                  <a className="text-mygreen font-semibold" href="">
                    terms of Use
                  </a>{" "}
                  &{" "}
                  <a className="text-mygreen font-semibold" href="">
                    Privacy Policy
                  </a>
                </span>
              </div>
              <div className="mt-10 w-full flex justify-center text-2xl sm:text-3xl">
								<Button name="Send"/>
              </div>
            </form>
          ) : success ? (
            <div
              onClick={() => setSuccess(false)}
              className={`bg-mygreen my-[50%] sm:mt-10 py-4 px-2 text-center shadow-2xl rounded-lg text-slate-100 font-bold tracking-wider text-2xl sm:text-3xl cursor-pointer`}
            >
              Success
            </div>
          ) : (
            <div
              onClick={() => setError(false)}
              className={`bg-red-400 my-[50%] sm:mt-10 py-4 px-2 text-center shadow-2xl rounded-lg text-slate-100 font-bold tracking-wider text-2xl sm:text-3xl cursor-pointer`}
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
