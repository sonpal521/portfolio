import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoSend } from "react-icons/io5";
import toast from "react-hot-toast";

function ContactFormCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: "your emial id", // write here your email
      message: formData.message,
    };
    // for in this contact form you can go emailjs.com website  signup and go to admin page 
    // there show emile service here you copy service id and second option email template create email tamplate and 
    // copy template id  and goto account page copy  public key and paste here 
    // if your are not understand then goto youtube video link - https://www.youtube.com/watch?v=NgWGllOjkbs
    emailjs
      .send(
        "replace your service id",     
        "replace your template id",
        templateParams,
        "replace your  public key"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Success! Thanks for send message ");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send  your message");
        }
      );
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="card opacity-100 shadow-lg compact bg-base-200 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className=" place-items-center py-6 px-6">
          <div className="flex min-h-full flex-1 flex-col justify-center ">
            <div className="card opacity-100 shadow-lg compact bg-base-300 cursor-pointer  transition-transform transform duration-500 hover:scale-105  hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  hover:text-[#fff]">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm sm:pl-2">
                <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight ">
                  Contact Form
                </h2>
              </div>

              <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm px-4 ">
                <form
                  className="space-y-3"
                  onSubmit={handleSubmit}
                  action="#"
                  method="POST"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 "
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your Name"
                        value={formData.name || ""}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md text-gray-900 border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 "
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Your Email"
                        value={formData.email || ""}
                        required
                        onChange={handleInputChange}
                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 "
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      value={formData.message || ""}
                      autoComplete="message"
                      onChange={handleInputChange }
                      className="textarea   bg-[#fff] text-gray-900  h-[80px] block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center mb-10 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      {formData.loading ? "Sending..." : "Send"}
                      <IoSend className=" ml-2 mt-1.5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactFormCard;
