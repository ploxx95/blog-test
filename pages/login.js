import ImageHome from "../component/Atoms/ImageHome";
import HeaderSpecial from "../component/Organism/HeaderSpecial";
import CardPost from "../component/ui/CardPost/CardPost";

 
export default function login() {
    return (
        <div className=' bg-blue-hard h-screen' >
            
           <div className='container mx-auto ' >
                    <HeaderSpecial></HeaderSpecial>
           
            <div className=' mix-container flex justify-center '  >
            <ImageHome></ImageHome>
            </div>
            </div>
        </div>
    )
}
 