import { Check, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
interface ContactDialogProps {
  isOpen: boolean
  onClose: () => void
}

const ContactDialog: React.FC<ContactDialogProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    instagram: '',
    message: '',
    agreedToTerms: false,
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }))
    console.log('Checkbox changed:', e.target.checked) // Debug log
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      instagram: '',
      message: '',
      agreedToTerms: false,
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm'>
      <div className='fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden'>
        <div
          className='pointer-events-auto w-full max-w-4xl bg-[#F5F4F5] rounded shadow-xl overflow-y-auto'
          style={{ maxHeight: 'calc(100vh)' }}
        >
          <div className='sticky top-0 right-0 flex justify-end p-4 bg-[#F5F4F5] z-10'>
            <button
              onClick={onClose}
              className='text-[#8E6F77]'
              aria-label='Close dialog'
            >
              <X size={24} />
            </button>
          </div>

          <div className='flex flex-col items-center px-8 pb-16 pt-4 gap-12'>
            <h2 className='font-serif text-3xl font-semibold text-center text-[#262832]'>
              Connect With Us
            </h2>

            <div className='w-full border-t border-[#262832]'></div>

            <form
              onSubmit={handleSubmit}
              className='flex flex-col w-full gap-8'
            >
              <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
                <div className='flex flex-col gap-3 w-full'>
                  <label
                    htmlFor='firstName'
                    className='font-normal text-lg text-[#272A34]'
                  >
                    First Name*
                  </label>
                  <div className='relative border-2 border-[#C3969A] rounded'>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder='Enter your first name'
                      className='w-full p-3 bg-transparent outline-none font-light text-lg placeholder-[#C3969A]'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-3 w-full'>
                  <label
                    htmlFor='lastName'
                    className='font-normal text-lg text-[#272A34]'
                  >
                    Last Name*
                  </label>
                  <div className='relative border-2 border-[#C3969A] rounded'>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder='Enter your last name'
                      className='w-full p-3 bg-transparent outline-none font-light text-lg placeholder-[#C3969A]'
                    />
                  </div>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
                <div className='flex flex-col gap-3 w-full'>
                  <label
                    htmlFor='email'
                    className='font-normal text-lg text-[#272A34]'
                  >
                    Email*
                  </label>
                  <div className='relative border-2 border-[#C3969A] rounded'>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder='Enter your email'
                      className='w-full p-3 bg-transparent outline-none font-light text-lg placeholder-[#C3969A]'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-3 w-full'>
                  <label
                    htmlFor='phone'
                    className='font-normal text-lg text-[#272A34]'
                  >
                    Phone Number
                  </label>
                  <div className='relative border-2 border-[#C3969A] rounded'>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='Enter your phone number'
                      className='w-full p-3 bg-transparent outline-none font-light text-lg placeholder-[#C3969A]'
                    />
                  </div>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
                <div className='flex flex-col gap-3 w-full'>
                  <label
                    htmlFor='company'
                    className='font-normal text-lg text-[#272A34]'
                  >
                    Company Name
                  </label>
                  <div className='relative border-2 border-[#C3969A] rounded'>
                    <input
                      type='text'
                      id='company'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder='Enter your company name'
                      className='w-full p-3 bg-transparent outline-none font-light text-lg placeholder-[#C3969A]'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-3 w-full'>
                  <label
                    htmlFor='instagram'
                    className='font-normal text-lg text-[#272A34]'
                  >
                    Instagram Username
                  </label>
                  <div className='relative border-2 border-[#C3969A] rounded'>
                    <input
                      type='text'
                      id='instagram'
                      name='instagram'
                      value={formData.instagram}
                      onChange={handleChange}
                      placeholder='Enter your instagram username'
                      className='w-full p-3 bg-transparent outline-none font-light text-lg placeholder-[#C3969A]'
                    />
                  </div>
                </div>
              </div>

              <div className='relative border-2 border-[#C3969A] rounded'>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Enter message'
                  rows={5}
                  className='w-full p-5 bg-transparent outline-none font-light text-lg placeholder-[#C3969A] resize-none'
                />
              </div>

              <div className='flex items-center gap-3'>
                <div className='relative'>
                  <input
                    type='checkbox'
                    id='agreedToTerms'
                    name='agreedToTerms'
                    checked={formData.agreedToTerms}
                    onChange={handleCheckboxChange}
                    required
                    className='w-5 h-5 appearance-none border-2 border-[#C3969A] rounded cursor-pointer'
                    style={{
                      background: formData.agreedToTerms
                        ? '#C3969A'
                        : 'transparent',
                    }}
                  />
                  {formData.agreedToTerms === true && (
                    <div className='absolute inset-0 top-[-6px] flex items-center justify-center pointer-events-none'>
                      <Check size={16} color='#F5F4F5' />
                    </div>
                  )}
                </div>
                <label
                  htmlFor='agreedToTerms'
                  className='font-normal text-lg text-[#272A34]'
                >
                  I agree to Raver.ai{' '}
                  <a
                    href='/terms'
                    className='underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Terms of Service
                  </a>
                  {' & '}
                  <a
                    href='/privacy'
                    className='underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type='submit'
                disabled={!formData.agreedToTerms}
                className='w-full py-3 bg-[#C3969A] text-[#F5F4F5] rounded text-base font-normal hover:bg-[#b38488] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDialog
