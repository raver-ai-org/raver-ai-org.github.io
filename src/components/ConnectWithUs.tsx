import { Mail } from 'lucide-react'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import ContactDialog from './ContactDialog'

interface ConnectWithUsProps {
  onClick?: () => void
  className?: string
  variant?: 'outline' | 'filled' | 'accent'
  iconOnlyMobile?: boolean
}

const ConnectWithUs: React.FC<ConnectWithUsProps> = ({
  onClick,
  className = '',
  variant = 'outline',
  iconOnlyMobile = false,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleClick = () => {
    setIsDialogOpen(true)
    if (onClick) onClick()
  }

  const getVariantClass = () => {
    switch (variant) {
      case 'filled':
        return 'bg-[#8E6F77] text-white w-full md:w-auto'
      case 'accent':
        return 'bg-[#C3969A] text-white md:w-auto'
      case 'outline':
      default:
        return 'border border-[#C3969A] text-[#C3969A] w-full md:w-auto'
    }
  }

  return (
    <>
      <button
        className={`h-12 px-4 py-1 rounded-[4px] flex items-center justify-center gap-4 cursor-pointer transition-all duration-300 hover:opacity-90 ${getVariantClass()} ${className}`}
        onClick={handleClick}
      >
        {iconOnlyMobile ? (
          <>
            <span className='md:inline hidden'>Connect With Us</span>
            <Mail size={20} />
          </>
        ) : (
          <>
            <span>Connect With Us</span>
            <Mail size={20} />
          </>
        )}
      </button>
      {isDialogOpen &&
        createPortal(
          <ContactDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
          />,
          document.body
        )}
    </>
  )
}

export default ConnectWithUs
