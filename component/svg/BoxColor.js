export default function BoxColor({color="#FFD354"}) {
    return (
      <>
      
      <div className='lg:hidden' >
      <svg
        className='BoxColor-sm ' 
        viewBox="0 0 268 171"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        
      >
        <path
          d="M31.244 46.116C12.98 50.214 0 66.43 0 85.146V139c0 17.673 14.327 32 32 32h204c17.673 0 32-14.327 32-32V32.975c0-20.499-19.004-35.712-39.005-31.224L31.244 46.116z"
          fill={color}
        />
      </svg>
      </div>
      
      </>
    )
  }