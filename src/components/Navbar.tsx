import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import ContactDialog from './ContactDialog'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const isHomePage = location.pathname === '/' || location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      if (isHomePage) {
        const sections = ['home', 'about', 'work', 'team', 'contact']
        const scrollPosition = window.scrollY + 100

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section) {
            const sectionTop = section.offsetTop
            if (scrollPosition >= sectionTop) {
              if (activeSection !== sections[i]) {
                setActiveSection(sections[i])
              }
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection, isHomePage])

  useEffect(() => {
    if (isHomePage && location.hash) {
      const sectionId = location.hash.replace('#', '')
      const element = document.getElementById(sectionId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(sectionId)
        }, 100)
      }
    }
  }, [location.hash, isHomePage])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string, isMobile = false) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(sectionId)
      }
    } else {
      navigate(`/#${sectionId}`)
    }

    if (isMobile) {
      setIsMenuOpen(false)
    }
  }

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isHomePage) {
      setIsDialogOpen(true)
    } else {
      navigate('/', { state: { openContact: true } })
    }

    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 lg:px-8 max-w-screen-2xl mx-auto transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div
          className={`flex flex-row justify-between items-center p-4 gap-2 lg:gap-12 rounded-full h-14 md:h-20 transition-all ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-md shadow-md'
              : 'bg-white/60 backdrop-blur-sm'
          }`}
        >
          <Link
            to='/'
            className='flex items-center'
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault()
                scrollToSection('home')
              }
            }}
          >
            <img src={logo} alt='Raver Logo' className='h-8 md:h-10' />
          </Link>

          <div className='hidden md:flex items-center justify-center flex-grow'>
            <ul className='flex space-x-8 lg:space-x-12'>
              <li className='mr-2 lg:mr-8'>
                <Link
                  to={isHomePage ? '#home' : '/#home'}
                  className={`text-black font-medium transition-all duration-300 border-b-2 ${
                    activeSection === 'home' && isHomePage
                      ? 'border-black pb-1'
                      : 'border-transparent hover:border-gray-300 hover:pb-1'
                  }`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      scrollToSection('home')
                    }
                  }}
                >
                  Home
                </Link>
              </li>
              <li className='mr-2 lg:mr-8'>
                <Link
                  to={isHomePage ? '#about' : '/#about'}
                  className={`text-sm md:tex-basetext-black font-medium transition-all duration-300 border-b-2 ${
                    activeSection === 'about' && isHomePage
                      ? 'border-black pb-1'
                      : 'border-transparent hover:border-gray-300 hover:pb-1'
                  }`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      scrollToSection('about')
                    }
                  }}
                >
                  About Us
                </Link>
              </li>
              <li className='mr-2 lg:mr-8'>
                <Link
                  to={isHomePage ? '#work' : '/#work'}
                  className={`text-black font-medium transition-all duration-300 border-b-2 ${
                    activeSection === 'work' && isHomePage
                      ? 'border-black pb-1'
                      : 'border-transparent hover:border-gray-300 hover:pb-1'
                  }`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      scrollToSection('work')
                    }
                  }}
                >
                  Our Work
                </Link>
              </li>
              <li className='mr-2 lg:mr-8'>
                <Link
                  to={isHomePage ? '#team' : '/#team'}
                  className={`text-black font-medium transition-all duration-300 border-b-2 ${
                    activeSection === 'team' && isHomePage
                      ? 'border-black pb-1'
                      : 'border-transparent hover:border-gray-300 hover:pb-1'
                  }`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      scrollToSection('team')
                    }
                  }}
                >
                  Meet Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div className='hidden md:block'>
            <Link
              to={isHomePage ? '#contact' : '/#contact'}
              className={`bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors ${
                activeSection === 'contact' && isHomePage
                  ? 'ring-2 ring-offset-2 ring-gray-900'
                  : ''
              }`}
              onClick={handleContactClick}
            >
              Connect With Us
            </Link>
          </div>

          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-700 focus:outline-none'
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='md:hidden bg-white/95 backdrop-blur-sm rounded-xl mt-2 p-4 shadow-lg absolute left-4 right-4 z-30'>
            <ul className='flex flex-col space-y-4'>
              <li>
                <Link
                  to={isHomePage ? '#home' : '/#home'}
                  className={`text-black font-medium block py-2 border-l-4 pl-2 transition-colors ${
                    activeSection === 'home' && isHomePage
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-transparent'
                  }`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      scrollToSection('home', true)
                    }
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={isHomePage ? '#about' : '/#about'}
                  className={`text-black font-medium block py-2 border-l-4 pl-2 transition-colors ${
                    activeSection === 'about' && isHomePage
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-transparent'
                  }`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      scrollToSection('about', true)
                    }
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={isHomePage ? '#work' : '/#work'}
                  className={`text-black font-medium block py-2 border-l-4 pl-2 transition-colors ${
                    activeSection === 'work' && isHomePage
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-transparent'
                  }`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      scrollToSection('work', true)
                    }
                  }}
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to={isHomePage ? '#team' : '/#team'}
                  className={`text-black font-medium block py-2 border-l-4 pl-2 transition-colors ${
                    activeSection === 'team' && isHomePage
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-transparent'
                  }`}
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault()
                      scrollToSection('team', true)
                    }
                  }}
                >
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link
                  to={isHomePage ? '#contact' : '/#contact'}
                  className={`bg-gray-900 text-white py-3 px-6 rounded-full block text-center ${
                    activeSection === 'contact' && isHomePage
                      ? 'ring-2 ring-offset-2 ring-gray-900'
                      : ''
                  }`}
                  onClick={handleContactClick}
                >
                  Connect With Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <ContactDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  )
}

export default Navbar
