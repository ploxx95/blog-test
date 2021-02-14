import Image from 'next/image'

import BoxColor from '../svg/BoxColor'

export default function ImageHome() {
    return (
        <>
         <Image
                src='/main-image-mobile.png'
                width="400"
                height="460"
                quality="60"
                objectFit="contain"
                >
            
        </Image>
            
                        
            
        </>
    )
}
