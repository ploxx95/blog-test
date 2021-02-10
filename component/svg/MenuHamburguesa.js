import * as React from "react"

export default function MenuHamburguesa(props) {
  return (
    <div className='px-2 flex items-center ' >

   
    <svg
    
      width={34}
      height={18}
      viewBox="0 0 34 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <rect
        width={28}
        height={3}
        rx={1.5}
        transform="matrix(-1 0 0 1 34 .5)"
        fill="#fff"
      />
      <rect
        width={28}
        height={3}
        rx={1.5}
        transform="matrix(-1 0 0 1 34 14.5)"
        fill="#fff"
      />
      <path
        d="M28 9a1.5 1.5 0 00-1.5-1.5h-25a1.5 1.5 0 100 3h25A1.5 1.5 0 0028 9z"
        fill="#fff"
      />
    </svg>
    </div>
  )
}


