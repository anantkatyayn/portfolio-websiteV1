import React, { useState } from "react";
import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import BGElements from "./BGElements";
import CustomToast from "./CustomToast";
const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const resetFormState = () => {
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting) return;

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
      // const response = await axios.post(
      //   "https://api.emailjs.com/api/v1.0/email/send",
      //   data
      // );
      console.log("Message sent successfully");
      setToast({ message: "Message sent successfully!", type: "success" });
      resetFormState();
    } catch (error) {
      setToast({ message: "Failed to send message. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#e1e1e1] z-20 text-[#2d2d2d] font-raleway relative pt-[96px] py-16"
    >
      <BGElements />

      <div className="container mx-auto px-6 lg:px-[240px] text-center">
        <h2 className="text-3xl font-bold mb-3">Let's Work Together</h2>
        <p className="text-lg mb-1 font-regular ">
          Have a question, a project, or just want to say hi? Drop me a message!
        </p>
        <p className="text-sm mb-12 font-regular ">
          or mail me at <span className="font-semibold">anantkatyayn112@gmail.com</span>!
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
              className="w-full px-4 py-3 max-h-[300px] border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 rounded-md shadow-md transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-[#0D0F1C] hover:shadow-lg"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      {toast && (
        <CustomToast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
};

export default ContactForm;
