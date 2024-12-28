import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = {
      service_id: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_APP_EMAILJS_USER_ID,
      template_params: {
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
      },
    };

    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log("Message sent successfully");
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
      setIsSubmitting(false);
      setFormState({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
        toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#e1e1e1] z-20 text-[#2d2d2d] font-raleway pt-[96px] py-16"
    >
      {/* Subtle Moving Outlined Elements */}
      <div className="absolute left-10 top-10 animate-random-motion">
        <div className="w-8 h-8 border-2 border-white rounded-full"></div>{" "}
        {/* Circle */}
      </div>
      <div className="absolute right-20 top-16 animate-random-motion">
        <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>{" "}
        {/* Diamond */}
      </div>
      <div className="absolute left-20 bottom-10 animate-random-motion">
        <div className="w-8 h-8 border-2 border-white transform rotate-45"></div>{" "}
        {/* Triangle */}
      </div>
      <div className="absolute right-10 bottom-20 animate-random-motion">
        <div className="w-6 h-6 border-2 border-white flex items-center justify-center">
          <span className="text-white text-sm font-bold transform rotate-45">
            +
          </span>{" "}
          {/* Plus */}
        </div>
      </div>
      <div className="absolute left-[40%] top-[20%] animate-random-motion">
        <div className="w-5 h-5 border-2 border-white rounded-full"></div>{" "}
        {/* Small Circle */}
      </div>
      <div className="absolute right-[30%] top-[30%] animate-random-motion">
        <div className="w-7 h-7 border-2 border-white"></div> {/* Square */}
      </div>
      <div className="absolute left-[10%] top-[50%] animate-random-motion">
        <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>{" "}
        {/* Diamond */}
      </div>
      <div className="absolute right-[10%] bottom-[40%] animate-random-motion">
        <div className="w-5 h-5 border-2 border-white rounded-full"></div>{" "}
        {/* Circle */}
      </div>

      <div className="container mx-auto px-6 lg:px-[240px] text-center">
        <h2 className="text-3xl font-bold mb-3">Let's Work Together</h2>
        <p className="text-lg mb-12 font-regular ">
          Have a question, a project, or just want to say hi? Drop me a message!
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-md shadow-xl p-8 text-gray-700 font-lato"
        >
          {/* Name and Email in Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm font-semibold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleInputChange}
              placeholder="Enter the subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formState.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-black text-white font-raleway shadow-lg hover:bg-gray-800 hover:shadow-xl transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {responseMessage && <p className="mt-6 text-sm">{responseMessage}</p>}
      </div>
      <ToastContainer />

    </section>
  );
};

export default ContactForm;
