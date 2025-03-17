const PlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={40}
    height={40}
    fill='none'
    {...props}
  >
    <rect width={40} height={40} fill='#fff' fillOpacity={0.25} rx={7.5} />
    <path
      fill='#fff'
      d='M23.333 20.556v4.888a.667.667 0 0 1-.666.667h-12a.667.667 0 0 1-.667-.667v-9.777c0-.368.299-.667.667-.667h12c.368 0 .666.299.666.667v4.889Zm0 0 5.574-4.645a.667.667 0 0 1 1.093.512v8.265c0 .565-.66.874-1.093.512l-5.574-4.644Z'
    />
    <path
      stroke='#fff'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.731}
      d='M23.333 20.556v4.888a.667.667 0 0 1-.666.667h-12a.667.667 0 0 1-.667-.667v-9.777c0-.368.299-.667.667-.667h12c.368 0 .666.299.666.667v4.889Zm0 0 5.574-4.645a.667.667 0 0 1 1.093.512v8.265c0 .565-.66.874-1.093.512l-5.574-4.644Z'
    />
  </svg>
)
export default PlayIcon
