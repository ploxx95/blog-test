import ButtonCta from "../Atoms/ButtonCta";
import ImageHome from "../Atoms/ImageHome";

export default function JumbotronMain() {
    return (
        <div className='mix-container overflow-hidden ' >
            <div className=' flex  flex-col items-center gap-3'  >
                <ImageHome></ImageHome>
                <div className='w-full px-3  text-3xl '>
                <h1 className=' text-white  text-center font-gilroy font-extrabold '>Diseño de  <span className='text-yellow-corp' >Personajes</span> para Videjuegos</h1>
                </div>
                <ButtonCta></ButtonCta>
            </div>
        </div>
    )
}
