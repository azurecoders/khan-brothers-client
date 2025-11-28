"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useMutation } from '@apollo/client/react';
import { CREATE_CONTACT } from '@/graphql/contacts';

const COMPANY_INFO = {
  address: 'Shop # 1, Plot# 1910, Ground Floor, Sector 6J1, Main Awan Road, Jonajoo Town, Manzsoor Colony, Near Ghusia Masjid, Karachi.',
  phone: '+92 321 8980284',
  supportPhone: '+92 305 2498416',
  email: 'khanbrothers.engsolution@gmail.com',
  supportEmail: 'support@khanbrothers.com',
  workingHours: {
    weekday: 'Mon - Fri: 9:00 AM - 6:00 PM',
    saturday: 'Sat: 9:00 AM - 2:00 PM'
  }
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [createContact, { loading: submitting }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Message Sent! We have received your message and will get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    },
    onError: (error) => {
      toast.error(`Failed to send message: ${error.message}`);
      console.error('Contact form error:', error);
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.subject.trim() || formData.subject.length < 5) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await createContact({
          variables: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: `${formData.subject}\n\n${formData.message}`
          }
        });
      } catch (err) {
        // Error is handled in onError callback
        console.error('Error submitting form:', err);
      }
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      {/* Page Header */}
      <div className="bg-primary py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-heading font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">Get in touch for quotes, inquiries, or support.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Our team is available to assist you with your engineering requirements.
                  Visit our office or contact us via phone or email.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address Card */}
                <div className="border border-border rounded-lg shadow-md p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Our Office</h3>
                    <p className="text-sm text-muted-foreground">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="border border-border rounded-lg shadow-md p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Phone Number</h3>
                    <p className="text-sm text-muted-foreground">{COMPANY_INFO.phone}</p>
                    <p className="text-sm text-muted-foreground">{COMPANY_INFO.supportPhone}</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="border border-border rounded-lg shadow-md p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email Address</h3>
                    <p className="text-sm text-muted-foreground">{COMPANY_INFO.email}</p>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="border border-border rounded-lg shadow-md p-6 flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Working Hours</h3>
                    <p className="text-sm text-muted-foreground">{COMPANY_INFO.workingHours.weekday}</p>
                    <p className="text-sm text-muted-foreground">{COMPANY_INFO.workingHours.saturday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="border border-border rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-primary mb-6">Send a Message</h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        disabled={submitting}
                        className={`w-full h-12 px-4 bg-gray-50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +92 300 1234567"
                        disabled={submitting}
                        className={`w-full h-12 px-4 bg-gray-50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ${errors.phone ? 'border-destructive' : ''}`}
                      />
                      {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        disabled={submitting}
                        className={`w-full h-12 px-4 bg-gray-50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry..."
                        disabled={submitting}
                        className={`w-full h-12 px-4 bg-gray-50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:cursor-not-allowed ${errors.subject ? 'border-destructive' : ''}`}
                      />
                      {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please tell us a bit about what you're looking for..."
                      disabled={submitting}
                      className={`w-full min-h-[150px] px-4 py-3 bg-gray-50 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-y disabled:opacity-50 disabled:cursor-not-allowed ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold px-8 h-12 rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full bg-gray-200 flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.983683832555!2d67.06669008515998!3d24.83023158962548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c6a69860f87%3A0xeee0a9eca585f0ec!2sUniversal%20Cables%20Industries%20Ltd!5e0!3m2!1sen!2s!4v1763733124168!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
