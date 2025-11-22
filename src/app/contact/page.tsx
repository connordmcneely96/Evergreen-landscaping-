'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <main className="min-h-screen">
            {/* Contact Form Section - Dark Green Background */}
            <section className="bg-forestGreen py-16 px-4">
                <div className="max-w-xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Contact Us Today For A Free Quote
                        </h1>
                        <p className="text-white text-lg">
                            From concept to completion, we make your dream yard a reality
                        </p>
                    </div>

                    {/* Form */}
                    {submitted ? (
                        <div className="bg-white rounded-lg p-8 text-center">
                            <h3 className="text-2xl font-bold text-forestGreen mb-2">Thank You!</h3>
                            <p className="text-gray-700">
                                We've received your request and will contact you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="First Name*"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="Last Name*"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="Email Address*"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="Phone Number*"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    id="service"
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                    placeholder="Service*"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-900 hover:bg-green-950 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                            >
                                Send
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Support Section - White Background */}
            <section className="bg-white py-12 px-4">
                <div className="max-w-xl mx-auto text-center">
                    <p className="text-forestGreen text-lg mb-6">
                        Need To Contact Support?
                    </p>
                    <Link
                        href="mailto:info@evergreenlandscaping.com"
                        className="inline-block bg-forestGreen hover:bg-green-800 text-white px-8 py-3 rounded font-semibold transition-colors"
                    >
                        Email
                    </Link>
                </div>
            </section>
        </main>
    )
}
