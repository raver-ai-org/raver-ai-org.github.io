import { useEffect, useState } from 'react'

const PrivacyPage = () => {
  const [activeSection, setActiveSection] = useState('terms')
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
      const sections = ['terms', 'privacy', 'usage', 'account', 'rights']
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
  }, [isMobile])

  const navigationItems = [
    { id: 'terms', label: 'Terms' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'usage', label: 'Usage' },
    { id: 'account', label: 'Account' },
    { id: 'rights', label: 'Rights' },
  ]

  return (
    <div className='flex flex-col md:flex-row min-h-screen w-full pt-[100px]'>
      <nav
        className={`
        ${isMobile ? 'w-full' : 'w-[320px] h-auto sticky top-[100px]'} 
        flex flex-col
        items-start
        p-4 md:p-10 
        gap-4 md:gap-10 
        bg-[#E3D3CF] 
        rounded-none md:rounded-[48px]
      `}
      >
        <h2 className='font-playfair font-bold text-2xl mb-6'>
          Terms of Service
        </h2>

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
                font-montserrat font-semibold text-base md:text-lg
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

      <main className='flex-1 p-6 md:p-12 max-w-[90%] md:max-w-[90%] mx-auto bg-white rounded-[48px] mt-10 mb-10 mr-10'>
        <section id='terms' className='mb-16'>
          <h2 className='font-playfair font-bold text-2xl md:text-3xl mb-6'>
            1. Terms and Conditions
          </h2>
          <p className='mb-4 text-base md:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            condimentum tortor sem, in semper nisl bibendum eu. Duis tempor
            lorem nibh, quis pellentesque mauris faucibus a. Ut efficitur mollis
            metus at sollicitudin. Aenean consectetur maximus pulvinar. Nam non
            egestas lorem, vitae sagittis elit. Cras vel eros id ipsum semper
            mollis.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Morbi ac elit vitae eros interdum venenatis. Nullam eu feugiat
            nulla. Suspendisse porttitor libero sit amet tincidunt mollis. Proin
            in lectus non lorem dictum rutrum. Proin id metus felis. Nullam enim
            nulla, ultrices in nisl eu, mattis elementum nisl. Cras in odio
            lectus. Maecenas vel ipsum pulvinar, scelerisque tellus non,
            sollicitudin neque.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Praesent posuere arcu ac hendrerit pellentesque. Nulla a tempus
            elit. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Cras volutpat libero nec quam
            finibus dictum. Nam bibendum neque eu nisl molestie condimentum.
            Nulla facilisi. Praesent turpis enim, laoreet ac diam quis, luctus
            tempor nisi.
          </p>
        </section>

        <section id='privacy' className='mb-16'>
          <h2 className='font-playfair font-bold text-2xl md:text-3xl mb-6'>
            2. Privacy Policy
          </h2>
          <p className='mb-4 text-base md:text-lg'>
            Nullam tristique tortor id urna varius, vel accumsan nibh tempus.
            Vivamus ut eros id dui cursus commodo. Quisque lobortis blandit
            sapien, et pellentesque nisi luctus eget. Integer luctus quam in
            lorem interdum, a condimentum nisi cursus. Praesent eget fermentum
            augue.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Mauris eget volutpat justo, quis bibendum sapien. Curabitur posuere,
            magna quis pellentesque tincidunt, metus nisi rhoncus dolor, in
            fermentum libero leo non mi. Integer purus nibh, pharetra ut erat
            ut, iaculis tempus enim. Donec pharetra blandit felis. Curabitur
            facilisis, libero vel hendrerit imperdiet, lectus eros varius justo,
            sed sollicitudin est lorem quis tellus.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Praesent sit amet mi iaculis, convallis mi in, tincidunt magna. Sed
            euismod quis lacus vitae facilisis. Duis eu gravida purus. Aliquam
            erat volutpat. Proin euismod orci et tempus finibus. Curabitur
            aliquam dignissim leo, id bibendum tellus auctor a. Suspendisse
            potenti. Integer dignissim finibus tempus. Donec tincidunt augue ac
            nisl finibus, in bibendum nisl placerat.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Donec id fermentum tellus. Nam sit amet malesuada eros, eget
            malesuada ante. Nam laoreet ex lacus, ut tempor ligula consectetur
            in. Aenean faucibus diam dolor, et pellentesque risus pharetra eu.
            Proin rhoncus justo metus, at gravida ex condimentum vitae. Vivamus
            a quam sem. Etiam ligula eros, accumsan non porta non, accumsan at
            mauris.
          </p>
        </section>

        <section id='usage' className='mb-16'>
          <h2 className='font-playfair font-bold text-2xl md:text-3xl mb-6'>
            3. Acceptable Usage
          </h2>
          <p className='mb-4 text-base md:text-lg'>
            Proin vulputate id augue a egestas. Nam gravida lobortis nulla, in
            fermentum quam lobortis sed. Donec sit amet erat dignissim lectus
            vehicula varius. Pellentesque vitae tristique erat. Praesent id
            sagittis risus, ac pharetra leo. In scelerisque, mi vel vehicula
            tincidunt, metus felis scelerisque neque, sed convallis arcu eros in
            neque.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Praesent ut erat vel magna placerat sollicitudin. Etiam imperdiet
            urna nec odio finibus luctus. Proin at dictum metus, vel aliquet ex.
            Sed id facilisis sem. Cras et purus tristique, faucibus lorem
            dapibus, sagittis lacus. Quisque ut purus non ante facilisis
            imperdiet. Mauris sed ante magna. Donec vehicula, leo ut faucibus
            egestas, magna purus porttitor nulla, et aliquam est enim at odio.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Maecenas tempus consequat enim vitae rhoncus. Etiam mauris tortor,
            feugiat quis aliquam nec, fermentum sed diam. Aliquam vehicula
            vestibulum risus, at iaculis elit. Praesent faucibus orci in ligula
            volutpat, vitae molestie urna tincidunt. Suspendisse id nisi ut erat
            tempus condimentum at at mauris. Vestibulum finibus est non nisi
            dignissim molestie.
          </p>
        </section>

        <section id='account' className='mb-16'>
          <h2 className='font-playfair font-bold text-2xl md:text-3xl mb-6'>
            4. Account Management
          </h2>
          <p className='mb-4 text-base md:text-lg'>
            Duis sed sapien pulvinar, ultrices risus in, tempus est. Maecenas eu
            lectus mattis, fermentum eros ac, pharetra orci. In hendrerit magna
            nec quam convallis, non elementum mauris tristique. Vestibulum
            lacinia interdum mauris vel vestibulum. In ullamcorper vehicula
            hendrerit.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Nulla lacinia nisi eu magna pulvinar ultricies. Vestibulum sed lorem
            nec ex vulputate auctor eget a tellus. Phasellus id erat nibh.
            Aliquam erat volutpat. Ut eu sagittis nibh, at sagittis magna.
            Vestibulum pulvinar magna non ante vulputate, non rutrum sapien
            molestie. In hac habitasse platea dictumst. In justo est, tempus in
            nisi nec, molestie mattis felis.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Fusce ac bibendum tellus. Aliquam erat volutpat. Nulla vel ligula
            metus. Donec elit risus, fermentum et iaculis a, bibendum non
            libero. Ut convallis justo sit amet quam congue interdum. Sed lorem
            diam, laoreet quis tempus id, porttitor vitae arcu. Maecenas commodo
            magna ex, at commodo orci lobortis non. Nulla at tempus quam.
            Vestibulum vitae venenatis lorem. Praesent nec sapien erat.
          </p>
        </section>

        <section id='rights' className='mb-16'>
          <h2 className='font-playfair font-bold text-2xl md:text-3xl mb-6'>
            5. Intellectual Property Rights
          </h2>
          <p className='mb-4 text-base md:text-lg'>
            Fusce quis orci ac tortor pretium aliquet eu eget tortor. Curabitur
            pharetra justo non est ultrices, eu ultrices mauris sodales. In hac
            habitasse platea dictumst. Aliquam erat volutpat. In hac habitasse
            platea dictumst. Vestibulum vel porta nisi. Aliquam in mauris
            consectetur, sodales nulla eu, maximus sem. Aliquam dapibus, magna
            ut porttitor pretium, lectus eros volutpat libero, eu bibendum
            tortor est ac enim.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Nulla venenatis, felis a ultricies pretium, sem metus semper erat,
            quis iaculis elit tortor ut nulla. Donec vehicula pretium congue.
            Cras nibh nulla, aliquam eget augue at, tincidunt ultrices nulla.
            Mauris venenatis pellentesque imperdiet. Nulla facilisi. Ut at
            maximus magna. Cras tempor orci ligula, at convallis turpis tempus
            quis. Nam a tincidunt arcu, non venenatis massa. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Quisque gravida, magna eget pulvinar condimentum, velit risus
            facilisis sapien, et tempus ipsum eros ac orci. Nam malesuada
            feugiat urna. Aliquam porta ipsum in sollicitudin cursus.
            Pellentesque vehicula lacus eu lorem lobortis, nec sagittis massa
            lacinia. Curabitur in nulla sit amet risus tempus tempus et vitae
            eros. Etiam condimentum non orci a convallis. Maecenas nec nulla id
            justo semper vestibulum vitae ultrices nibh.
          </p>
          <p className='mb-4 text-base md:text-lg'>
            Pellentesque at risus in sem pretium feugiat. Nulla et iaculis
            purus. Suspendisse et nisi at sem efficitur semper. Donec sed ligula
            a lorem rutrum aliquam eget nec lorem. Maecenas sed lorem quis odio
            aliquam blandit. Aenean quis facilisis nulla. Vivamus sed pulvinar
            dui. Etiam sagittis lacus nec enim ultricies suscipit. Nam
            consectetur urna quam, vel interdum tellus hendrerit in.
          </p>
        </section>
      </main>
    </div>
  )
}

export default PrivacyPage
