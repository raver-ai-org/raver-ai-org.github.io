import { SVGProps } from 'react'
const MoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='#C3969A'
      d='M20.031 12.22a.748.748 0 0 1 0 1.061l-7.5 7.5a.747.747 0 0 1-1.061 0l-7.5-7.5A.75.75 0 1 1 5.03 12.22l6.97 6.97 6.969-6.97a.75.75 0 0 1 1.061 0ZM11.47 13.28a.748.748 0 0 0 1.061 0l7.5-7.5A.75.75 0 1 0 18.97 4.72L12 11.69 5.031 4.72A.75.75 0 1 0 3.97 5.78l7.5 7.5Z'
    />
  </svg>
)
export default MoreIcon
