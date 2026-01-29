import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:shadow-xl hover:scale-105',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-xl',
    outline: 'border-2 border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600 bg-transparent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  )
}

export default Button
