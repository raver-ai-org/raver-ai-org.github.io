import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AboutSection from '../components/AboutSection'
import ElevateBrandSection from '../components/ElevateBrandSection'
import HeroSection from '../components/HeroSection'
import PurposeSection from '../components/PurposeSection'
import TeamSection from '../components/TeamSection'

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const purposeRef = useRef(null)
  const elevateRef = useRef(null)
  const teamRef = useRef(null)

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1)

      const sectionRefs = {
        home: homeRef,
        about: aboutRef,
        purpose: purposeRef,
        work: elevateRef,
        team: teamRef,
      }

      setTimeout(() => {
        //@ts-expect-error FIxMe
        const targetRef = sectionRefs[sectionId]
        if (targetRef && targetRef.current) {
          const yOffset = -100
          const y =
            targetRef.current.getBoundingClientRect().top +
            window.scrollY +
            yOffset
          window.scrollTo({ top: y, behavior: 'smooth' })
        } else {
          const element = document.getElementById(sectionId)
          if (element) {
            const yOffset = -100
            const y =
              element.getBoundingClientRect().top + window.scrollY + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
        }

        setTimeout(() => {
          navigate(location.pathname, { replace: true })
        }, 500)
      }, 300)
    }
  }, [location, navigate])

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PurposeSection />
      <ElevateBrandSection />
      <TeamSection />
    </div>
  )
}
