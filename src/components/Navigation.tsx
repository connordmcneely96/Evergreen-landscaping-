'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'

export default function Navigation() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/contact', label: 'Contact' },
        { href: '/location', label: 'Location' },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname?.startsWith(href)
    }

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            {/* Logo Section */}
            <div className="flex flex-col items-center py-6">
                <Logo showText={false} size="lg" />
                <h1 className="text-2xl font-serif font-bold text-forestGreen mt-3 tracking-wide">
                    EVERGREEN LANDSCAPING
                </h1>
                <p className="text-sm text-golden tracking-widest mt-1">
                    LANDSCAPING & PRESSURE WASHING
                </p>
            </div>

            {/* Navigation Bar */}
            <nav className="border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex justify-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-4 text-sm font-medium transition-colors ${
                                    isActive(link.href)
                                        ? 'text-forestGreen'
                                        : 'text-gray-600 hover:text-forestGreen'
                                }`}
                            >
                                {link.label}
                                {isActive(link.href) && (
                                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-forestGreen" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex justify-center py-3">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-md text-forestGreen hover:bg-gray-100"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {mobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-2 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block px-3 py-3 text-center text-sm font-medium border-b border-gray-100 ${
                                    isActive(link.href)
                                        ? 'text-forestGreen border-b-2 border-forestGreen'
                                        : 'text-gray-600 hover:text-forestGreen'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
