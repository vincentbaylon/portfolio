import { useState } from "react";
import emailjs from "emailjs-com";
import Github from "./github.svg";
import LinkedIn from "./linkedin.svg";
import Twitter from "./twitter.svg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Missing a required field");
    } else {
      const templateId = "template_tpmtovc";
      const serviceId = "service_5gsbwtb";
      const userId = "user_T0c9HVubIJMZMsHRVIWoj";

      emailjs
        .send(
          serviceId,
          templateId,
          {
            message: formData.message,
            from_name: formData.name,
            reply_to: formData.email,
          },
          userId
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Message sent");

            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          function (error) {
            console.log("FAILED...", error);
            alert("Failed, please try again");
          }
        );
    }
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleGithub = () => {
    openInNewTab("https://github.com/vincentbaylon");
  };

  const handleLinkedIn = () => {
    openInNewTab("https://www.linkedin.com/in/vincentbaylon/");
  };

  const handleTwitter = () => {
    openInNewTab("https://twitter.com/codingwithVince");
  };

  return (
    <>
      <div className="flex flex-col py-10 h-5/6 md:py-20">
        <h1
          id="contact"
          className="p-2 my-5 text-3xl font-light text-white sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-black"
        >
          Let's Connect!
        </h1>
        <div className="flex justify-center">
          <h1 className="text-black text-md md:text-xl">
            Looking for a developer to build your vision or join your team?
          </h1>
        </div>

        <div className="flex flex-row w-full m-auto my-5 justify-evenly md:w-1/2">
          <img
            className="hover:cursor-pointer"
            src={LinkedIn}
            onClick={handleLinkedIn}
            alt="Linkedin logo"
          />
          <img
            className="hover:cursor-pointer"
            src={Github}
            onClick={handleGithub}
            alt="Github logo"
          />
          <img
            className="hover:cursor-pointer"
            src={Twitter}
            onClick={handleTwitter}
            alt="Twitter logo"
          />
          {/* <img
                  className="hover:cursor-pointer"
                  src={Instagram}
                  onClick={handleInstagram}
                  alt="Instagram logo"
               /> */}
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full p-3 bg-gray-500 rounded-md md:w-1/2">
            <form className="w-full text-black">
              <div className="flex flex-col justify-center gap-4 mt-2">
                <input
                  className="h-10 p-2 rounded-md"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                  placeholder="Name*"
                  value={formData.name}
                />
                <input
                  className="h-10 p-2 rounded-md"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                  placeholder="Email*"
                  value={formData.email}
                />
                <textarea
                  className="p-2 rounded-md"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  required
                  placeholder="Hi there!*"
                  value={formData.message}
                  rows="3"
                />
                <span className="flex justify-end">
                  <h1 className="mx-2 my-1 text-gray-400">
                    *All fields required
                  </h1>
                  <button
                    className="px-4 py-1 mb-1 text-gray-500 bg-white border-2 border-white rounded-md text-md hover:bg-gray-500 hover:text-white"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
