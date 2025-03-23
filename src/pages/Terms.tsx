import { useEffect, useState } from 'react'

const TermsOfUsePage = () => {
  const [activeSection, setActiveSection] = useState('acceptance')
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
        'acceptance',
        'use',
        'billing',
        'intellectual',
        'privacy',
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
    { id: 'acceptance', label: 'Acceptance of Terms' },
    { id: 'use', label: 'Use of RAVER' },
    { id: 'billing', label: 'Billing' },
    { id: 'intellectual', label: 'Intellectual Property' },
    { id: 'privacy', label: 'Privacy & More' },
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
        <h2 className='font-bold text-2xl mb-6'>Terms of Service</h2>

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
          <h1 className='font-bold text-3xl md:text-4xl mb-4'>Terms of Use</h1>
          <p className='text-base'>Effective Date: April 15, 2024</p>
          <p className='text-base mt-6 font-semibold'>
            IMPORTANT NOTICE: PLEASE READ CAREFULLY BEFORE USING RAVER
          </p>
          <p className='text-base mt-4'>
            These Terms of Use ("Terms") govern your use of RAVER, a product
            developed and operated by RAVER Inc. ("RAVER," "we," "us," or
            "our"). By accessing or using RAVER, you ("you" or "User") agree to
            comply with and be bound by these Terms. If you do not agree to
            these Terms, please do not use RAVER.
          </p>
        </div>

        <section id='acceptance' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>
            1. Acceptance of Terms
          </h2>
          <p className='mb-4 text-base'>
            By using RAVER, you acknowledge that you have read, understood, and
            agree to be bound by these Terms, including any updates or
            modifications that may be made from time to time. RAVER reserves the
            right to change or modify these Terms at any time without prior
            notice. Your continued use of RAVER after such changes will
            constitute your acceptance of the revised Terms.
          </p>
        </section>

        <section id='use' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>
            2. Use of RAVER
          </h2>
          <h3 className='font-bold text-xl mb-4'>2.1 Eligibility</h3>
          <p className='mb-6 text-base'>
            You must be at least 18 years old or have the necessary legal
            capacity in your jurisdiction to use RAVER. By using RAVER, you
            represent and warrant that you meet these eligibility requirements.
          </p>

          <h3 className='font-bold text-xl mb-4'>2.2 Prohibited Activities</h3>
          <p className='mb-2 text-base'>You agree not to:</p>
          <ul className='list-none ml-4 mb-6'>
            <li className='mb-2 text-base'>
              a. Use RAVER for any unlawful or unauthorized purpose.
            </li>
            <li className='mb-2 text-base'>
              b. Violate any applicable laws or regulations.
            </li>
            <li className='mb-2 text-base'>
              c. Attempt to reverse engineer, decompile, or disassemble any part
              of RAVER.
            </li>
            <li className='mb-2 text-base'>
              d. Use RAVER to create, distribute, or promote any content that is
              unlawful, harmful, threatening, abusive, harassing, defamatory,
              vulgar, obscene, invasive of another's privacy, hateful, or
              racially, ethnically, or otherwise objectionable.
            </li>
            <li className='mb-2 text-base'>
              e. Impersonate any person or entity or falsely claim an
              affiliation with any third party.
            </li>
            <li className='mb-2 text-base'>
              f. Share your RAVER account credentials with others or allow
              unauthorized access to your account.
            </li>
          </ul>

          <h3 className='font-bold text-xl mb-4'>
            2.3 Content Generated by RAVER
          </h3>
          <p className='mb-4 text-base'>
            RAVER uses generative AI to create marketing campaigns based on the
            input provided by Users. You understand and acknowledge that the
            content generated by RAVER is automated and may not always be
            accurate, complete, or suitable for your specific needs. You are
            solely responsible for reviewing and editing the content generated
            by RAVER to ensure its accuracy and compliance with applicable laws
            and regulations.
          </p>
        </section>

        <section id='billing' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>3. Billing</h2>
          <p className='mb-6 text-base'>
            RAVER offers a credit-based service. Users may receive free credits
            occasionally, including upon signing up. Details about RAVER's
            subscription offerings and pricing, which may vary by location, are
            available on our website. Pricing is determined based on the billing
            information provided at the time of purchase.
          </p>

          <h3 className='font-bold text-xl mb-4'>
            3.1 Subscriptions and Renewals
          </h3>
          <p className='mb-6 text-base'>
            You have the option to sign up for either a monthly or annual
            subscription. Subscriptions auto-renew according to the selected
            frequency (monthly or annually) until canceled by the user.
            Subscription cancellations can be made at any time but do not
            warrant a refund or credit for any previously billed amounts.
          </p>

          <h3 className='font-bold text-xl mb-4'>3.2 Subscription Credit</h3>
          <p className='mb-6 text-base'>
            At the start of each subscription cycle, beginning on the purchase
            date, subscription credits are replenished. Unused credits do not
            carry over to the subsequent month. Credits are consumed through
            various activities within RAVER, such as posting to social media or
            downloading campaigns.
          </p>

          <h3 className='font-bold text-xl mb-4'>3.3 Cancellation</h3>
          <p className='mb-6 text-base'>
            Subscriptions can be canceled at any point via the account settings.
            Upon cancellation, no refunds will be issued for previously paid
            fees, and any due charges will become immediately payable.
          </p>

          <h3 className='font-bold text-xl mb-4'>3.4 Free Trials and Pilots</h3>
          <p className='mb-6 text-base'>
            RAVER may provide free trials or pilots, offering a preview of new
            features. The eligibility and duration of these trials or pilots are
            at RAVER's discretion.
          </p>

          <h3 className='font-bold text-xl mb-4'>3.5 Changes to Pricing</h3>
          <p className='mb-4 text-base'>
            RAVER reserves the right to modify pricing at any time. For
            subscribers, any price changes will take effect at the next renewal
            period or thirty (30) days post-notification, whichever is later.
          </p>
        </section>

        <section id='intellectual' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>
            4. Intellectual Property
          </h2>
          <h3 className='font-bold text-xl mb-4'>4.1 Ownership</h3>
          <p className='mb-6 text-base'>
            RAVER and all related intellectual property rights, including but
            not limited to patents, copyrights, trademarks, and trade secrets,
            are owned by RAVER Inc. You do not acquire any ownership rights in
            RAVER or its content.
          </p>

          <h3 className='font-bold text-xl mb-4'>4.2 User-Generated Content</h3>
          <p className='mb-4 text-base'>
            Any content or input you provide to RAVER remains your intellectual
            property. By using RAVER, you grant RAVER Inc. a worldwide,
            non-exclusive, royalty-free license to use, reproduce, modify,
            adapt, publish, translate, and distribute the content you provide
            for the purpose of providing and improving RAVER.
          </p>
        </section>

        <section id='privacy' className='mb-16'>
          <h2 className='font-bold text-2xl md:text-3xl mb-6'>5. Privacy</h2>
          <p className='mb-6 text-base'>
            RAVER's Privacy Policy governs the collection, use, and disclosure
            of your personal information. By using RAVER, you consent to the
            practices described in the Privacy Policy, which can be found on the
            RAVER website.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            6. Indemnification
          </h2>
          <p className='mb-6 text-base'>
            You agree to indemnify, defend, and hold harmless RAVER Inc., its
            officers, directors, employees, agents, licensors, suppliers, and
            any third-party information providers from and against all losses,
            expenses, damages, and costs, including reasonable attorneys' fees,
            resulting from any violation of this Agreement by you or misuse of
            the Service.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            7. Termination
          </h2>
          <p className='mb-6 text-base'>
            RAVER reserves the right to suspend or terminate your access to
            RAVER at any time and for any reason, including if you violate these
            Terms or engage in conduct that RAVER deems harmful to its users or
            its business.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            8. Disclaimer of Warranties
          </h2>
          <p className='mb-6 text-base'>
            RAVER IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF
            ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT
            PERMITTED BY APPLICABLE LAW, RAVER INC. DISCLAIMS ALL WARRANTIES,
            INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            9. Limitation of Liability
          </h2>
          <p className='mb-6 text-base'>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, RAVER INC. SHALL
            NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
            INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL,
            OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH
            YOUR USE OF RAVER, REGARDLESS OF THE LEGAL THEORY UNDER WHICH SUCH
            LIABILITY IS ASSERTED, EVEN IF RAVER INC. HAS BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            10. Governing Law
          </h2>
          <p className='mb-6 text-base'>
            These Terms are governed by and construed in accordance with the
            laws of the state or country where RAVER Inc. is headquartered,
            without regard to its conflict of law principles.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            11. Contact Information
          </h2>
          <p className='mb-6 text-base'>
            If you have any questions or concerns about these Terms, please
            contact RAVER Inc. at info@raver.ai.
          </p>

          <h2 className='font-bold text-2xl md:text-3xl mb-6 mt-12'>
            12. Entire Agreement
          </h2>
          <p className='mb-6 text-base'>
            These Terms constitute the entire agreement between you and RAVER
            Inc. with respect to your use of RAVER and supersede all prior
            agreements and understandings.
          </p>

          <p className='mb-4 text-base italic mt-8'>
            By using RAVER, you acknowledge that you have read, understood, and
            agree to these Terms.
          </p>
        </section>
      </div>
    </div>
  )
}

export default TermsOfUsePage
