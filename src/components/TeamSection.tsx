import React, { useRef, useState } from 'react'
import fabienne from '../assets/fabienne.png'
import greg from '../assets/greg.png'
import zara from '../assets/zara.png'

const TeamSection: React.FC = () => {
  const teamRef = useRef(null)
  const [expandedBios, setExpandedBios] = useState({
    greg: false,
    fabienne: false,
    zara: false,
  })

  const toggleBio = (member: keyof typeof expandedBios) => {
    setExpandedBios({
      ...expandedBios,
      [member]: !expandedBios[member],
    })
  }

  const fullBios = {
    greg: 'Greg Boyd is a creative tech entrepreneur and visionary leader focused on helping companies enhance their brand and drive revenue through visually compelling storytelling. With a background in management and technology consulting, he has worked with top firms like KPMG, IBM, and Travelers Insurance while launching multiple startups. Greg is also passionate about mentorship and talent development, founding Mango Mentors to connect emerging tech talent with industry leaders. His mission is to blend innovation, creativity, and purpose to transform how businesses engage with their audiences.',
    fabienne:
      "Fabienne Heymans is a visionary Creative Director with a distinguished career in beauty and fashion. As an international model and actor, she represented top brands like Maybelline, Revlon, and L'Oréal, collaborating with leading creatives worldwide. Her expertise in aesthetics, branding, and storytelling—combined with a passion for conscious living—allows her to merge art, technology, and purpose. As Creative Director at Raver, she leads the artistic vision, using AI-powered tools to craft visually striking, emotionally resonant content that inspires and connects deeply with audiences.",
    zara: "Zara is the Lead Creative Strategist at RAVER, spearheading a dynamic team of AI creatives who continually push the envelope of digital art. Her leadership drives the creation of immersive visuals that capture the client's energy and spirit, blending technology and creativity in innovative ways. Under her guidance, the team develops bold, futuristic concepts that not only redefine visual boundaries but also leave clients continually amazed and inspired by their imaginative designs.",
  }

  const shortBios = {
    greg: 'Greg Boyd is a creative tech entrepreneur and visionary leader focused on helping companies enhance their brand and drive revenue through visually compelling storytelling. With a background in management and technology...',
    fabienne:
      "Fabienne Heymans is a visionary Creative Director with a distinguished career in beauty and fashion. As an international model and actor, she represented top brands like Maybelline, Revlon, and L'Oréal, collaborating with leading creatives...",
    zara: "Zara is the Lead Creative Strategist at RAVER, spearheading a dynamic team of AI creatives who continually push the envelope of digital art. Her leadership drives the creation of immersive visuals that capture the client's energy and spirit, blending....",
  }

  return (
    <div className='bg-[#ecedec] w-full flex justify-center items-center'>
      <div
        ref={teamRef}
        id='team'
        className='flex flex-col items-start py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#ecedec] w-full max-w-[94.5rem] mx-auto'
      >
        <div className='flex flex-col items-start gap-8 sm:gap-12 md:gap-16 w-full'>
          <div className='flex flex-col items-start gap-8 sm:gap-12 md:gap-16 w-full max-w-full md:max-w-[657px]'>
            <div className='flex flex-col items-start gap-4 sm:gap-6 w-full'>
              <div className='flex flex-col items-start gap-2 w-full'>
                <p className='text-[#272a34] font-poppins font-medium text-base sm:text-lg leading-[27px]'>
                  Our Team
                </p>

                <h2 className='text-[#272a34] font-cormorant font-bold text-2xl sm:text-3xl leading-[39px] uppercase'>
                  Meet The Heart and Soul of Raver
                </h2>
              </div>

              <div className='w-full h-[1px] bg-[#272a34]'></div>

              <p className='text-[#272a34] font-poppins font-light text-sm sm:text-base leading-7 sm:leading-8'>
                The power behind Raver – visionaries, storytellers and
                creatives. Blending innovation in technology, with creativity
                and heart to transform AI into a storytelling force that
                connects and inspires action.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 w-full'>
            <div className='flex flex-col items-start gap-4 w-full'>
              <div className='relative w-full aspect-square rounded-md overflow-hidden bg-[#272a34]'>
                <img
                  src={greg}
                  alt='Greg Boyd'
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex flex-col items-start gap-4 w-full'>
                <div className='flex flex-col items-start gap-3 sm:gap-4 w-full'>
                  <div className='flex flex-col items-start w-full'>
                    <h3 className='text-[#272a34] font-cormorant font-bold text-xl sm:text-2xl leading-8'>
                      Greg Boyd
                    </h3>

                    <p className='text-[#272a34] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
                      CEO
                    </p>
                  </div>

                  <p className='text-[#272a34] font-poppins font-light text-sm sm:text-base leading-6 sm:leading-8'>
                    {expandedBios.greg ? fullBios.greg : shortBios.greg}
                  </p>
                </div>

                <button
                  onClick={() => toggleBio('greg')}
                  className='text-[#272a34] font-poppins text-sm sm:text-base leading-6 underline'
                >
                  {expandedBios.greg ? 'See Less' : 'See More'}
                </button>
              </div>
            </div>

            <div className='flex flex-col items-start gap-4 w-full'>
              <div className='relative w-full aspect-square rounded-md overflow-hidden bg-[#272a34]'>
                <img
                  src={fabienne}
                  alt='Fabienne Heymans'
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex flex-col items-start gap-4 w-full'>
                <div className='flex flex-col items-start gap-3 sm:gap-4 w-full'>
                  <div className='flex flex-col items-start w-full'>
                    <h3 className='text-[#272a34] font-cormorant font-bold text-xl sm:text-2xl leading-8'>
                      Fabienne Heymans
                    </h3>

                    <p className='text-[#272a34] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
                      Chief Creative Director
                    </p>
                  </div>

                  <p className='text-[#272a34] font-poppins font-light text-sm sm:text-base leading-6 sm:leading-8'>
                    {expandedBios.fabienne
                      ? fullBios.fabienne
                      : shortBios.fabienne}
                  </p>
                </div>

                <button
                  onClick={() => toggleBio('fabienne')}
                  className='text-[#272a34] font-poppins text-sm sm:text-base leading-6 underline'
                >
                  {expandedBios.fabienne ? 'See Less' : 'See More'}
                </button>
              </div>
            </div>

            <div className='flex flex-col items-start gap-4 w-full'>
              <div className='relative w-full aspect-square rounded-md overflow-hidden bg-[#272a34]'>
                <img
                  src={zara}
                  alt='Zara'
                  className='w-full h-full object-cover'
                />
              </div>

              <div className='flex flex-col items-start gap-4 w-full'>
                <div className='flex flex-col items-start gap-3 sm:gap-4 w-full'>
                  <div className='flex flex-col items-start w-full'>
                    <h3 className='text-[#272a34] font-cormorant font-bold text-xl sm:text-2xl leading-8'>
                      Zara
                    </h3>

                    <p className='text-[#272a34] font-poppins text-sm sm:text-base leading-6 sm:leading-8'>
                      Lead Creative Strategist
                    </p>
                  </div>

                  <p className='text-[#272a34] font-poppins font-light text-sm sm:text-base leading-6 sm:leading-8'>
                    {expandedBios.zara ? fullBios.zara : shortBios.zara}
                  </p>
                </div>

                <button
                  onClick={() => toggleBio('zara')}
                  className='text-[#272a34] font-poppins text-sm sm:text-base leading-6 underline'
                >
                  {expandedBios.zara ? 'See Less' : 'See More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection
