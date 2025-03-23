import { useEffect, useState } from 'react'

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState('information')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = isMobile ? -120 : -40
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'information',
        'usage',
        'sharing',
        'rights',
        'additional',
      ]
      const scrollPosition = window.scrollY + (isMobile ? 150 : 100)

      let currentSection = sections[0]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const sectionTop = element.offsetTop - 50

          if (scrollPosition >= sectionTop) {
            currentSection = section
          } else {
            break
          }
        }
      }

      if (activeSection !== currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile, activeSection])

  const navigationItems = [
    { id: 'information', label: 'Information Collection' },
    { id: 'usage', label: 'Information Usage' },
    { id: 'sharing', label: 'Information Sharing' },
    { id: 'rights', label: 'Your Rights' },
    { id: 'additional', label: 'Additional Info' },
  ]

  return (
    <div className='flex flex-col md:flex-row min-h-screen w-full pt-16 p-8 md:p-16 bg-[#262832]'>
      <nav
        className={`
        ${isMobile ? 'w-full' : 'w-[320px] h-auto sticky top-[100px]'} 
        flex flex-col
        items-start
        p-4 md:p-10 
        gap-4 md:gap-10 
        bg-[#C3969A] 
        rounded-sm
      `}
      >
        <h2 className='font-bold text-2xl mb-6'>Privacy Statement</h2>

        <div
          className={`
          flex flex-col
          items-start 
          gap-2 md:gap-6 
          w-full
        `}
        >
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                flex justify-start items-center 
                py-2 px-4 w-full h-12
                font-montserrat text-base 
                whitespace-nowrap
                transition-all duration-200
                cursor-pointer
                ${
                  activeSection === item.id
                    ? 'border-l-4 border-[#262832] pl-3 text-black'
                    : 'border-l-0 text-gray-700 hover:text-black'
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <div className='flex-1 md:p-12 md:pl-20 max-w-[90%] mt-16 md:mt-0 mx-auto bg-[#262832] rounded-[48px] text-[#C3969A]'>
        <div className='mb-12'>
          <h1 className='font-bold text-3xl md:text-4xl mb-4'>
            Privacy Statement
          </h1>
          <p className='text-base'>Last Updated: April 15, 2024</p>
          <p className='text-base mt-6'>
            RAVER Inc. ("RAVER," "we," "us," or "our") is committed to
            protecting your privacy. This Privacy Statement explains how we
            collect, use, disclose, and safeguard your personal information when
            you use our services, including the RAVER.AI application
            ("Application"). By using the Application, you consent to the
            practices described in this Privacy Statement.
          </p>
        </div>

        <section id='information' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>
            1. Information We Collect
          </h2>

          <h3 className='font-bold text-xl mb-4'>
            1.1 Information You Provide
          </h3>
          <p className='mb-6 text-base'>
            When you use the Application, you may provide us with personal
            information, including but not limited to your name, email address,
            company information, and payment details.
          </p>

          <h3 className='font-bold text-xl mb-4'>
            1.2 Automatically Collected Information
          </h3>
          <p className='mb-4 text-base'>
            We may collect certain information automatically when you use the
            Application, such as your IP address, device information, usage
            data, and cookies.
          </p>
        </section>

        <section id='usage' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>
            2. How We Use Your Information
          </h2>
          <p className='mb-4 text-base'>
            We use the information we collect for various purposes, including:
          </p>

          <ul className='list-none ml-4 mb-6'>
            <li className='mb-2 text-base'>
              a. Providing and maintaining the Application.
            </li>
            <li className='mb-2 text-base'>
              b. Personalizing your experience.
            </li>
            <li className='mb-2 text-base'>
              c. Processing transactions and payments.
            </li>
            <li className='mb-2 text-base'>
              d. Responding to your requests, comments, or questions.
            </li>
            <li className='mb-2 text-base'>
              e. Improving the Application and our services.
            </li>
            <li className='mb-2 text-base'>
              f. Ensuring compliance with legal and regulatory requirements.
            </li>
          </ul>
        </section>

        <section id='sharing' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>
            3. How We Share Your Information
          </h2>
          <p className='mb-4 text-base'>
            We may share your personal information with:
          </p>

          <ul className='list-none ml-4 mb-6'>
            <li className='mb-2 text-base'>
              a. Service providers and partners who assist us in operating the
              Application.
            </li>
            <li className='mb-2 text-base'>
              b. Legal and regulatory authorities when required by law.
            </li>
            <li className='mb-2 text-base'>
              c. Third parties in connection with a merger, acquisition, or sale
              of assets.
            </li>
          </ul>
        </section>

        <section id='rights' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>
            4. Your Rights and Choices
          </h2>
          <p className='mb-4 text-base'>
            You have certain rights regarding your personal information,
            including:
          </p>

          <ul className='list-none ml-4 mb-6'>
            <li className='mb-2 text-base'>
              a. Access: You can request access to the personal information we
              hold about you.
            </li>
            <li className='mb-2 text-base'>
              b. Correction: You can request corrections to inaccurate or
              incomplete data.
            </li>
            <li className='mb-2 text-base'>
              c. Deletion: You can request the deletion of your personal
              information.
            </li>
            <li className='mb-2 text-base'>
              d. Data Portability: You can request a copy of your data in a
              structured, machine-readable format.
            </li>
          </ul>

          <p className='mb-4 text-base'>
            To exercise these rights or for any privacy-related inquiries,
            please contact us at info@raver.ai.
          </p>
        </section>

        <section id='additional' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>5. Security</h2>
          <p className='mb-6 text-base'>
            We employ reasonable administrative, technical, and physical
            measures to protect your personal information from unauthorized
            access, disclosure, alteration, or destruction.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            6. Social Media Authorization
          </h2>
          <p className='mb-6 text-base'>
            When you authorize a social media network (e.g. Instagram, Facebook,
            Twitter, etc.) it may store cookies or other data. Your interactions
            with the authorization feature are governed by the privacy policy of
            the authorized social media network and Raver Inc. shall not be held
            liable for any unlawful data processing activities performed. At any
            time you can revoke the Apps access to your social accounts by
            unlinking via the settings page in the application.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            7. International Data Transfers
          </h2>
          <p className='mb-6 text-base'>
            Your personal information may be stored and processed in the United
            States or other countries. We ensure that adequate data protection
            measures are in place when transferring data outside of the European
            Economic Area (EEA).
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            8. Changes to this Privacy Statement
          </h2>
          <p className='mb-6 text-base'>
            We may update this Privacy Statement to reflect changes in our
            practices or for other operational, legal, or regulatory reasons. We
            will notify you of any material changes by posting the updated
            Privacy Statement on our website or through other appropriate means.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            9. Contact Us
          </h2>
          <p className='mb-6 text-base'>
            If you have questions, concerns, or requests regarding your privacy
            or this Privacy Statement, please contact us at info@raver.ai.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPage
