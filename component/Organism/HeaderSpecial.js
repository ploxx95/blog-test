import MenuHamburguesa from "../svg/MenuHamburguesa";

 

export default function HeaderSpecial() {
    return (
        <div className=' mix-container flex justify-between items-center h-12 ' >
            <div>
            <h1 className='text-white font-gilroy font-bold  text-2xl ' >ENTP</h1>
            </div>
            <MenuHamburguesa></MenuHamburguesa>
        </div>
    )
}
