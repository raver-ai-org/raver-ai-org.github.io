import React from 'react'
import carolyn from '../assets/carolyn.png'
import fabienne from '../assets/fabienne.png'
import greg from '../assets/greg.png'
import zara from '../assets/zara.png'

type TeamMemberProps = {
  name: string
  title: string
  description: string
  imagePosition: 'left' | 'right'
  image: string
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  description,
  imagePosition,
  image,
}) => {
  const fullName = title ? `${name} - ${title}` : name

  return (
    <div
      className={`flex items-center w-full gap-6 sm:gap-8 md:gap-12 lg:gap-20 
                flex-col md:flex-row ${
                  imagePosition === 'right'
                    ? 'md:flex-row-reverse'
                    : 'md:flex-row'
                }`}
    >
      <div
        className='w-full md:w-[250px] lg:w-80 h-[200px] sm:h-[220px] md:h-[240px] lg:h-60 
                     rounded-[24px] sm:rounded-[32px] md:rounded-[48px] 
                     bg-[#E3D3CF] shrink-0 overflow-hidden'
      >
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover min-h-[235px]'
        />
      </div>

      <div className='flex flex-col justify-center items-start gap-2 sm:gap-3 md:gap-4 flex-1 mt-4 md:mt-0'>
        <h3 className='text-black font-playfair text-xl sm:text-2xl font-bold leading-tight'>
          {fullName}
        </h3>
        <p className='text-black font-montserrat text-sm sm:text-base md:text-lg font-normal leading-relaxed sm:leading-7 md:leading-8'>
          {description}
        </p>
      </div>
    </div>
  )
}

const TeamHeader: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 sm:gap-4 w-full'>
      <h2 className='w-full max-w-[880px] text-black text-center font-playfair text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
        Meet The Heart and Soul of Raver
      </h2>
      <div className='w-full max-w-[880px] text-black text-center font-montserrat'>
        <p className='text-base sm:text-lg md:text-xl lg:text-[24px] font-medium leading-relaxed sm:leading-7 md:leading-8'>
          The power behind Raver – visionaries, storytellers and creatives.
          Blending innovation in technology, with creativity and heart to
          transform AI into a storytelling force that connects and inspires
          action.
        </p>
      </div>
    </div>
  )
}

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Greg Boyd',
      title: 'CEO',
      description:
        'Greg Boyd is a creative tech entrepreneur and visionary leader focused on helping companies enhance their brand and drive revenue through visually compelling storytelling. With a background in management and technology consulting, he has worked with top firms like KPMG, IBM, and Travelers Insurance while launching multiple startups. Greg is also passionate about mentorship and talent development, founding Mango Mentors to connect emerging tech talent with industry leaders. His mission is to blend innovation, creativity, and purpose to transform how businesses engage with their audiences.',
      imagePosition: 'left' as const,
      image: greg,
    },
    {
      name: 'Fabienne Heymans',
      title: 'Chief Creative Director',
      description:
        'Fabienne Heymans is a visionary Creative Director with an esteemed career in the beauty and fashion industries. As an international model and actor, she has represented iconic brands such as Maybelline, Revlon, Clinique, Ulta, Prose, Moroccanoil, and L’Oréal, collaborating with top photographers, designers, and creatives worldwide. Her expertise in aesthetics, branding, and storytelling—combined with her passion for conscious living and environmental sustainability—enables her to craft immersive experiences that seamlessly merge art, technology, and purpose. As Creative Director at Raver, Fabienne leads the artistic vision, ensuring the development of high-impact advertising content that leverages AI-powered tools. Through visually striking imagery, compelling narratives, and emotionally resonant storytelling, she creates content that not only captures attention but also inspires, moves, and deeply connects with audiences.',
      imagePosition: 'right' as const,
      image: fabienne,
    },
    {
      name: 'Carolyn Neff',
      title: 'Chief of storytelling and Content',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum ornare elit, eu tincidunt velit scelerisque id. In porttitor pellentesque mauris, nec pretium augue. In vehicula enim nisl. Phasellus euismod sollicitudin nisl, eu ultrices velit cursus quis. Nam vitae elit eget nisi venenatis dignissim at ac libero. In sagittis sem a justo lobortis aliquet. Proin dapibus, dolor quis porta pretium, purus est placerat mauris, ut vehicula mi tellus vel augue.',
      imagePosition: 'left' as const,
      image: carolyn,
    },
    {
      name: 'Zara',
      title: 'Content Creator',
      description:
        "I'm a content creator and AI artist with a deep passion for digital innovation. Being part of the Raver community inspires me to blend technology and creativity, crafting immersive visuals that reflect its energy and spirit. I love playing with colors, light, and dynamic compositions to create eye-catching visuals that stand out, pushing creative boundaries to bring bold, futuristic ideas to life.",
      imagePosition: 'right' as const,
      image: zara,
    },
  ]

  return (
    <div
      id='team'
      className='flex w-full flex-col items-start bg-[#F4EDEC] rounded-[24px] sm:rounded-[32px] md:rounded-[48px] 
                max-w-[95%] sm:max-w-[90%] lg:max-w-[95%] mx-auto mb-12 md:mb-20'
    >
      <div
        className='flex px-4 py-8 sm:p-8 md:p-10 lg:p-16 xl:p-20 
                     flex-col items-start gap-10 sm:gap-12 md:gap-16 lg:gap-20 w-full 
                     rounded-[24px] sm:rounded-[32px] md:rounded-[48px]'
      >
        <TeamHeader />
        <div className='flex flex-col items-start gap-10 sm:gap-12 md:gap-16 lg:gap-20 w-full'>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
              imagePosition={member.imagePosition}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamSection
