import Link from 'next/link'

interface LogoProps {
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Logo({ showText = true, size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-[60px] w-[60px]',
    md: 'h-[80px] w-[80px]',
    lg: 'h-[120px] w-[120px]',
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  }

  const textColors = {
    sm: 'text-white',
    md: 'text-white',
    lg: 'text-forestGreen',
  }

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <img
        src="/images/evergreen-logo.svg"
        alt="Evergreen Landscaping Logo"
        width={size === 'sm' ? 60 : size === 'md' ? 80 : 120}
        height={size === 'sm' ? 60 : size === 'md' ? 80 : 120}
        className={sizeClasses[size]}
      />
      {showText && (
        <span className={`font-bold ${textColors[size]} ${textSizes[size]}`}>
          Evergreen Landscaping
        </span>
      )}
    </Link>
  )
}
