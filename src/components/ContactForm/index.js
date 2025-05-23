"use client";

import { useState } from 'react';
import { submitContactForm } from '@/actions/contactActions';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  
  // For name fields (firstName, lastName) - remove any numbers
  if (name === 'firstName' || name === 'lastName') {
    const lettersOnly = value.replace(/[0-9]/g, '');
    setFormData(prev => ({
      ...prev,
      [name]: lettersOnly
    }));
  } 
  // For mobile field - remove any non-numeric characters
  else if (name === 'mobile') {
    const numbersOnly = value.replace(/[^0-9]/g, '');
    setFormData(prev => ({
      ...prev,
      [name]: numbersOnly
    }));
  }
  // For all other fields
  else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  // Clear error when user types
  if (errors[name]) {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = await submitContactForm(formData);

    if (result.success) {
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
      });
    } else {
      if (result.errors) {
        // Convert array errors to single messages
        const errorMessages = {};
        Object.entries(result.errors).forEach(([field, messages]) => {
          if (messages && messages.length > 0) {
            errorMessages[field] = messages.join(', ');
          }
        });
        setErrors(errorMessages);
      } else if (result.message) {
        setErrors({ form: result.message });
      }
    }

    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <div className="p-6 bg-green-50 text-white rounded-lg border border-[#008000]">
        <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
        <p>Your message has been sent successfully. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="w-full max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className={`appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-gray-600 ${errors.firstName ? 'border-red-500' : 'border-gray-600'}`}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            onKeyDown={(e) => {

              if (/\d/.test(e.key)) {
                e.preventDefault();
              }
            }}
            pattern="[A-Za-z\s]*"
          />
          {errors.firstName && <p className="text-[#CD5656] para text-[14px] mt-1">{errors.firstName}</p>}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className={`appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-gray-600 ${errors.lastName ? 'border-red-500' : 'border-gray-600'}`}
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            onKeyDown={(e) => {

              if (/\d/.test(e.key)) {
                e.preventDefault();
              }
            }}
            pattern="[A-Za-z\s]*"
          />
          {errors.lastName && <p className="text-[#CD5656] para text-[14px] mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-gray-600 ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-[#CD5656] para text-[14px] mt-1">{errors.email}</p>}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="mobile">
            Mobile
          </label>
          <input
            className={`appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-gray-600 ${errors.mobile ? 'border-red-500' : 'border-gray-600'}`}
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="1234567890"
            value={formData.mobile}
            onChange={handleChange}
            onKeyDown={(e) => {

              if (!/[0-9]/.test(e.key) &&
                e.key !== 'Backspace' &&
                e.key !== 'Delete' &&
                e.key !== 'ArrowLeft' &&
                e.key !== 'ArrowRight') {
                e.preventDefault();
              }
            }}
            pattern="[0-9]*"
            inputMode="numeric"
          />
          {errors.mobile && <p className="text-[#CD5656] para text-[14px] mt-1">{errors.mobile}</p>}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className={`appearance-none block w-full bg-gray-700 text-white border rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-gray-600 h-40 resize-none ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
            id="message"
            name="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-[#CD5656] para text-[14px] mt-1">{errors.message}</p>}
        </div>
      </div>
      {errors.form && (
        <div className="mb-6 p-3 bg-red-900/20 text-[#CD5656] rounded border border-red-700">
          {errors.form}
        </div>
      )}
      <div className="flex justify-end">
        <button
          type="submit"
          className={`btn btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </button>
      </div>
    </form>
  );
}