import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import ContactDialog from './ContactDialog'

interface ConnectButtonProps {
  text?: string
  bgColor?: string
  textColor?: string
  width?: string | number
  height?: string | number
  onClick?: () => void
  className?: string
}

const ConnectButton: React.FC<ConnectButtonProps> = ({
  text = 'Connect With Us',
  bgColor = '#E3D3CF',
  textColor = 'black',
  width = '456px',
  height = '64px',
  onClick,
  className = '',
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const bgColorStyle = bgColor.startsWith('#') ? bgColor : undefined
  const textColorStyle = textColor.startsWith('#') ? textColor : undefined

  const bgColorClass = !bgColorStyle ? bgColor : ''
  const textColorClass = !textColorStyle ? textColor : ''

  const handleClick = () => {
    setIsDialogOpen(true)
    if (onClick) onClick()
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`font-montserrat flex flex-row justify-center items-center gap-4 rounded-full font-medium cursor-pointer transition-all duration-300 hover:opacity-90 w-full md:w-auto ${bgColorClass} ${textColorClass} ${className}`}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          maxWidth: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          backgroundColor: bgColorStyle,
          color: textColorStyle,
        }}
      >
        <span className='font-montserrat text-base md:text-lg'>{text}</span>
        <ArrowRight className='w-5 h-5' />
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

export default ConnectButton
