import { X } from 'lucide-react'
import React, { useState } from 'react'

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }))
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
    <div className='fixed inset-0 z-50 overflow-y-auto bg-black/30 backdrop-blur-sm flex items-center justify-center'>
      <div className='fixed inset-0 md:relative md:inset-auto max-w-[800px] w-full h-full md:h-auto md:max-h-[90vh] md:rounded-3xl bg-white shadow-xl md:m-4 overflow-y-auto flex flex-col'>
        <div className='sticky top-0 p-2 2xl:p-6 flex justify-end items-center bg-white z-10'>
          <button
            onClick={onClose}
            className='p-2 rounded-full hover:bg-gray-100 transition-colors'
            aria-label='Close dialog'
          >
            <X size={24} />
          </button>
        </div>
        <h2 className='text-center text-2xl md:text-3xl font-bold w-full pb-0 2xl:pb-10'>
          Connect With Us
        </h2>

        <div className='flex-grow p-8 overflow-y-auto'>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col space-y-2'>
                <label htmlFor='firstName' className='font-medium'>
                  First Name<span className=''>*</span>
                </label>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder='Enter your first name'
                  required
                  className='p-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-800'
                />
              </div>

              <div className='flex flex-col space-y-2'>
                <label htmlFor='lastName' className='font-medium'>
                  Last Name<span className=''>*</span>
                </label>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder='Enter your last name'
                  required
                  className='p-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-800'
                />
              </div>

              <div className='flex flex-col space-y-2'>
                <label htmlFor='email' className='font-medium'>
                  Email<span className=''>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Enter your email'
                  required
                  className='p-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-800'
                />
              </div>

              <div className='flex flex-col space-y-2'>
                <label htmlFor='phone' className='font-medium'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Enter your phone number'
                  className='p-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-800'
                />
              </div>

              <div className='flex flex-col space-y-2'>
                <label htmlFor='company' className='font-medium'>
                  Company Name<span className=''>*</span>
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  placeholder='Enter your company name'
                  required
                  className='p-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-800'
                />
              </div>

              <div className='flex flex-col space-y-2'>
                <label htmlFor='instagram' className='font-medium'>
                  Instagram Username
                </label>
                <input
                  type='text'
                  id='instagram'
                  name='instagram'
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder='Enter your instagram username'
                  className='p-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-800'
                />
              </div>

              <div className='flex flex-col space-y-2 md:col-span-2'>
                <label htmlFor='message' className='font-medium'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Enter message'
                  rows={5}
                  className='p-4 border border-gray-600 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-800 resize-none'
                />
              </div>

              <div className='md:col-span-2'>
                <div className='flex items-start gap-3'>
                  <input
                    type='checkbox'
                    id='agreedToTerms'
                    name='agreedToTerms'
                    checked={formData.agreedToTerms}
                    onChange={handleCheckboxChange}
                    required
                    className='mt-1 h-5 w-5 rounded border-gray-600  focus:ring-gray-800'
                  />
                  <label
                    htmlFor='agreedToTerms'
                    className='text-base text-gray-700'
                  >
                    I agree to Raver.ai{' '}
                    <a
                      href='/terms'
                      className=' underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Terms of Service
                    </a>
                    {' & '}
                    <a
                      href='/privacy'
                      className=' underline'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <button
                type='submit'
                disabled={!formData.agreedToTerms}
                className='w-full py-2 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactDialog
