import emailjs from "emailjs-com";
import { useState } from "react";

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

  return (
    <>
      <div className="flex flex-col py-10 h-5/6 md:py-20">
        <h1
          id="contact"
          className="p-2 my-5 text-3xl font-light text-white sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-black"
        >
          Let's Connect!
        </h1>
        <div className="flex justify-center mt-6 mb-4">
          <h1 className="text-center text-black text-md font-regular md:text-xl">
            Looking for a developer to build your vision or join your team?
            Contact me!
          </h1>
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
