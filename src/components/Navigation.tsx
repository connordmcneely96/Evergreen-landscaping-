'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

export default function Navigation() {
    const pathname = usePathname()

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
        <header className="bg-white sticky top-0 z-50">
            {/* Logo Section */}
            <div className="flex flex-col items-center pt-10 pb-4 px-5">
                <Logo showText={false} size="lg" />
                <h1 className="text-[22px] sm:text-[24px] md:text-[26px] font-serif font-bold text-forestGreen mt-4 tracking-[1px] text-center">
                    EVERGREEN LANDSCAPING
                </h1>
                <p className="text-[11px] sm:text-[12px] text-golden tracking-[2px] mt-1 font-normal uppercase">
                    LANDSCAPING & PRESSURE WASHING
                </p>
            </div>

            {/* Horizontal Scrollable Navigation */}
            <nav
                className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide mt-4"
                style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollBehavior: 'smooth',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}
            >
                <div className="flex min-w-max justify-start sm:justify-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative flex-shrink-0 px-[30px] py-[15px] text-[17px] font-medium whitespace-nowrap transition-colors ${
                                isActive(link.href)
                                    ? 'text-forestGreen'
                                    : 'text-forestGreen/70 hover:text-forestGreen'
                            }`}
                        >
                            {link.label}
                            {isActive(link.href) && (
                                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-forestGreen" />
                            )}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    )
}
