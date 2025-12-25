/**
 * Contact Component
 * 
 * Client Component - needs 'use client' because we're managing form state.
 * 
 * Modern React forms pattern:
 * - useState for controlled inputs (form data is React state)
 * - Could also use uncontrolled inputs with useRef
 * - For production, consider React Hook Form or similar libraries
 */
'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  /**
   * Form State Management
   * 
   * Using a single state object for all form fields.
   * Alternative: individual useState for each field.
   */
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  /**
   * Form Submission Handler
   * 
   * Using Web3Forms - a free email service for static sites.
   * Sends form data to Web3Forms API, which forwards it to your email.
   * 
   * Web3Forms handles:
   * - Email delivery to me@kelvinma.com
   * - Spam protection
   * - Form validation
   * - No backend required!
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setStatus('submitting');

    try {
      /**
       * Web3Forms API Integration
       * 
       * Endpoint: https://api.web3forms.com/submit
       * Method: POST
       * Content-Type: application/json
       * 
       * Required fields:
       * - access_key: Your Web3Forms access key
       * - name, email, message: Form data
       */
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '5fe16617-2e0a-4a55-8ec4-d6bcb699c086', // Your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // Optional: Add these for better email formatting
          subject: `kelvinma.com Inquiry from ${formData.name}`,
          from_name: formData.name,
          // Bot spam protection (Web3Forms feature)
          botcheck: false,
        })
      });

      const data = await response.json();

      if (data.success) {
        // Email sent successfully!
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        // Web3Forms returned an error
        console.error('Web3Forms error:', data);
        setStatus('error');
      }
    } catch (error) {
      // Network error or other issue
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  /**
   * Input Change Handler
   * 
   * Updates formData state when user types in any field.
   * Uses computed property name to handle all inputs with one function.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-foreground-muted">
              Interested in engineering leadership, technical strategy, or just want to connect? 
              <br/> I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Let's Connect
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  I'm always open to discussing engineering leadership, technical strategy, 
                  M&A integrations, or opportunities in the tech space.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a href="mailto:me@kelvinma.com" className="text-foreground-muted hover:text-primary">
                      me@kelvinma.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-foreground-muted">Asheville, NC (Remote)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-4 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/kelvinma" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground-muted hover:text-primary"
                    >
                      linkedin.com/in/kelvinma
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-center">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
