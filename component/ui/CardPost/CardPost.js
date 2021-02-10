import Image from 'next/image' 
import IconJoystick from '../../svg/IconJoystick'


export default function CardPost({title,image}) {
    return (
        
        <div className="container  grid grid-cols-2 gap-4" >
            <div>
                <div className='relative bg-blue-600 h-48 overflow-hidden '>
                    <Image
                    src='/meet-purple.webp'
                    alt="Imagen del Post"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center center"
                    />
                    
                </div>
                <div className='container bg-blue-dark container px-4 pb-5' >
                    <div className='flex items-center ' >
                    <IconJoystick></IconJoystick>
                <h4>Consolas</h4>
                    </div>
                <h3 className='text-gray-50 font-sans font-bold' >Best Neon Effects for Photoshop: Get The Glow</h3>
                <div>
                    <div></div>
                </div>
                </div>
            </div>
            
       
        </div>
    )
}
