import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-forestGreen py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Logo showText={false} size="sm" />
        </div>

        {/* Copyright */}
        <p className="text-white text-sm">
          © 2025, All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
