import React, { useRef, useState, useEffect } from "react";
import commentService from "../services/comment";

const CommentForm = () => {
  const formRef = useRef(null);
  const [response, setResponse] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendComment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const inputf = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    try {
      await commentService.postComment(inputf);
      setResponse("Message Sent Successfully!");
      setIsSubmitted(true);
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setResponse("Message Failed to Send!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setResponse(null);
  };

  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-semibold text-center mb-6">
              Send a Message
            </h2>

            <form ref={formRef} onSubmit={sendComment} className="space-y-5">
              <input
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="w-full rounded-lg border px-4 py-2"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="w-full rounded-lg border px-4 py-2"
              />
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your message..."
                className="w-full rounded-lg border px-4 py-2 resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        ) : (
          /* ✅ Success State */
          <div className="text-center py-10 space-y-6">
            <div className="text-green-600 text-xl font-semibold">
              ✅ Message Sent Successfully!
            </div>

            <p className="text-gray-600">
              Thank you for reaching out. I’ll get back to you shortly.
            </p>

            <button
              onClick={resetForm}
              className="inline-flex justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              Send another message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentForm;
