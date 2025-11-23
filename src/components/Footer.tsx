import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-forestGreen py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <Logo showText={false} size="sm" />
        </div>

        {/* Copyright */}
        <p className="text-white text-[16px]">
          © 2025, All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
