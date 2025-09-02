"use client";

import { useState } from "react";
import { IoSendSharp, IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

// --- Contact Form Component ---
// Handles the form's state, validation, and submission logic.

const ContactForm = ({ setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // --- Validation Logic ---
  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.number) {
      tempErrors.number = "Number is required.";
    } else if (!/^\d{10}$/.test(formData.number)) {
      tempErrors.number = "Number must be 10 digits.";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.companyName)
      tempErrors.companyName = "Company name is required.";
    if (!formData.message) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // --- Handle Input Changes ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // --- Handle Form Submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmissionMessage("");

      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setSubmissionMessage("Form submitted successfully!");
      console.log("Form data submitted:", formData);

      // Reset form fields
      setFormData({
        name: "",
        number: "",
        email: "",
        companyName: "",
        message: "",
      });
      setErrors({});
      setIsModalOpen(false);
      toast.success("Thank you, our team will reach you shortly")
    }
  };

  return (
    <div className="p-8">
      <div className="w-full max-w-7xl mx-auto space-y-2 md:space-y-6 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight md:block hidden">
            Connect With Boiler Experts
          </h2>
           <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight block md:hidden">
            Contact Us
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600 md:block hidden">
            Reach our team for reliable, efficient, and innovative boiler
            solutions anytime.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-6" noValidate>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {/* Name Field */}
            <div>
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
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-1 md:py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Number Field */}
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Number
              </label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className={`w-full px-3 py-1 md:py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.number ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.number && (
                <p className="mt-2 text-sm text-red-600">{errors.number}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {/* Email Field */}
            <div>
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
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-1 md:py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Company Name Field */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full px-3 py-1 md:py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.companyName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.companyName && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-1 md:py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-fit flex items-center gap-4 text-sm md:text-lg group py-2 px-8 border border-[#DC2621] text-[#DC2621] rounded transition-colors hover:bg-[#DC2621] hover:text-white disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              <IoSendSharp className="text-[#DC2621] group-hover:text-white" />
            </button>
          </div>
        </form>

        {submissionMessage && (
          <p className="md:mt-4 text-sm text-center text-green-600">
            {submissionMessage}
          </p>
        )}
      </div>
    </div>
  );
};

// --- Contact Modal Component ---
// Manages the modal's open/close state and displays the ContactForm.

const ContactModal = ({ isModalOpen, setIsModalOpen }) => {
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-10">
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl relative m-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 transition-transform hover:text-gray-800 hover:scale-110"
              aria-label="Close modal"
            >
              <IoClose className="size-6 md:size-28" />
            </button>
            <ContactForm setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactModal;
