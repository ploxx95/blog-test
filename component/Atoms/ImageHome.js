import Image from 'next/image'

import BoxColor from '../svg/BoxColor'

export default function ImageHome() {
    return (
        <div className='' >
             
            <div className='mb-8' >
                <Image
                src='/yellow-mobil.png'
                width="600"
                height="600"
                
                objectFit="contain"
                ></Image>
            </div>
            <div className='mb-8' >
                <Image
                src='/yellow-mobile.png'
                width="600"
                height="600"
                quality="60"
                objectFit="contain"
                ></Image>
            </div>
                        
            
        </div>
    )
}
