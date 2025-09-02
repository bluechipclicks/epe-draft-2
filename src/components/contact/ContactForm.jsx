"use client";

import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const ContactForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      console.log("Form data submitted:", formData);
      setFormData({
        name: "",
        number: "",
        email: "",
        companyName: "",
        message: "",
      });
      setErrors({});
      toast.success("Thank you, our team will reach you shortly")
    }
  };

  return (
    <div className="pb-12 md:pb-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 md:space-y-6  rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight text-center">
          Connect With Boiler Experts
        </h2>
        <p className="mt-2 md:mt-4 text-sm md:text-base text-gray-600 text-center mb-6 md:mb-12">
          Reach our team for reliable, efficient, and innovative boiler
          solutions anytime.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 ">
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
                className={`w-full px-3 py-2 mt-1 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
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
                className={`w-full px-3 py-2 mt-1 border ${
                  errors.number ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.number && (
                <p className="mt-2 text-sm text-red-600">{errors.number}</p>
              )}
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 ">
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
                className={`w-full px-3 py-2 mt-1 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
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
                className={`w-full px-3 py-2 mt-1 border ${
                  errors.companyName ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
              {errors.companyName && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

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
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 mt-1 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            ></textarea>
            {errors.message && (
              <p className="mt-2 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-fit tag flex items-center gap-4 text-lg group  py-2 px-8 border hover:border-gray-300/60 bg-transparent border-[#DC2621] text-[#DC2621] hover:text-white rounded hover:bg-[#DC2621] transition-colors disabled:bg-gray-400"
            >
              
{isSubmitting ? "Submitting..." : "Submit"}<IoSendSharp className="text-[#DC2621] group-hover:text-white"/>
            </button>
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default ContactForm;
