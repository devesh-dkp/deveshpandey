import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const CommentForm = () => {
  const form = useRef();
  const [response, setResponse] = useState(null);
  // set response message to null after 5 seconds
  useEffect(() => {
    let timer;
    if (response) {
      timer = setTimeout(() => {
        setResponse(null);
      }, 8000); // 10 seconds
    }
    return () => clearTimeout(timer);
  }, [response]);
  const sendEmail = (e) => {
    console.log(e);
    e.preventDefault();
    const x = "service_4ybzndx";
    const z = "ZFjyNhuFj-YIoLfo_";
    const y = "template_cbbligs";
    const inputf = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };
    emailjs.init(z);
    emailjs.send(x, y, inputf).then(
      () => {
        console.log("SUCCESS!");
        setResponse("Message Sent Successfully!");
      },
      (error) => {
        console.log("FAILED...", error.text);
        setResponse("Message Failed to Send!");
      }
    );
    e.target.reset();
  };

  return (
    <>
      <div className="flex justify-center items-center py-8 bg-white">
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
          <form ref={(form) => form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="px-4 py-2 rounded-lg border border-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your_email@example.com"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-1 w-full"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-8 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {response === "Message Sent Successfully!" ? (
                <p>Message Sent Successfully!</p>
              ) : response === "Message Failed to Send!" ? (
                <p>Message Failed to Send!</p>
              ) : (
                <p>Send Message</p>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CommentForm;
