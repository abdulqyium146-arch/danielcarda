'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { SITE } from '@/lib/constants'

// Note: For client components, metadata must be in a separate server component wrapper
// This page uses client-side form state, so we export metadata from a separate file

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: SITE.phone,
    href: SITE.phoneHref,
    description: 'Available 24/7 for emergencies',
  },
  {
    icon: Mail,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    description: 'We respond within a few hours',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: SITE.address.display,
    href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address.display)}`,
    description: 'Sanford, FL — Serving all of Seminole County',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: SITE.hours.display,
    href: undefined,
    description: 'Emergency services always available',
  },
]

const services = [
  'Emergency Lockout',
  'Residential Service',
  'Commercial Service',
  'Automotive Service',
  'Car Key Replacement',
  'Lock Rekeying',
  'Lock Installation',
  'Smart Lock Setup',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Please describe your situation'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-16">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Contact' }]} light className="mb-6" />
          <div className="max-w-2xl">
            <span className="section-label text-gold-400">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-gray-300 text-xl">
              For emergencies, call us directly at{' '}
              <a href={SITE.phoneHref} className="text-gold-400 font-bold hover:text-gold-300">
                {SITE.phone}
              </a>
              . For non-emergency inquiries, use the form below.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-primary-950">How to Reach Us</h2>
              <p className="text-gray-600">
                For immediate locksmith assistance, call us — we answer every call personally, 24 hours a day.
              </p>

              {contactInfo.map(({ icon: Icon, label, value, href, description }) => (
                <div key={label} className="card flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-semibold text-gray-900 hover:text-primary-700 transition-colors block text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900 text-sm">{value}</p>
                    )}
                    <p className="text-gray-400 text-xs mt-0.5">{description}</p>
                  </div>
                </div>
              ))}

              {/* Emergency box */}
              <div className="emergency-gradient rounded-2xl p-5 text-white">
                <p className="font-bold text-lg mb-1">🔴 Emergency Lockout?</p>
                <p className="text-red-100 text-sm mb-3">Don&apos;t fill out a form — call us right now.</p>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 bg-white text-emergency-700 font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-red-50 transition-colors w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {isSuccess ? (
                <div className="card text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-4">
                    Thanks, {formData.name.split(' ')[0]}! We&apos;ll get back to you within a few hours. For urgent needs, please call us directly at{' '}
                    <a href={SITE.phoneHref} className="text-primary-700 font-semibold">{SITE.phone}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5" noValidate>
                  <h2 className="text-2xl font-bold text-primary-950 mb-1">Request a Service</h2>
                  <p className="text-gray-500 text-sm">We typically respond within a few hours during business hours. For emergencies, please call.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        autoComplete="name"
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                          errors.name ? 'border-emergency-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.name && <p className="text-emergency-600 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(407) 555-0100"
                        autoComplete="tel"
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors ${
                          errors.phone ? 'border-emergency-500' : 'border-gray-200'
                        }`}
                      />
                      {errors.phone && <p className="text-emergency-600 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white ${
                        errors.service ? 'border-emergency-500' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-emergency-600 text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Service Address (optional)
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Sanford, FL"
                      autoComplete="street-address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Describe Your Situation *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Please describe what you need — lock type, vehicle make/model, situation details, etc."
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${
                        errors.message ? 'border-emergency-500' : 'border-gray-200'
                      }`}
                    />
                    {errors.message && <p className="text-emergency-600 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-base py-3.5 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-900 border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</a>.
                    We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
