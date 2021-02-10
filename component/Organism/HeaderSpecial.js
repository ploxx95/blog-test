import MenuHamburguesa from "../svg/MenuHamburguesa";

 

export default function HeaderSpecial() {
    return (
        <div className=' md:main-container   flex justify-between  ' >
            <div>
            <h1 className='text-white font-gilroy font-thin italic text-2xl ' >ENTP</h1>
            </div>
            <MenuHamburguesa></MenuHamburguesa>
        </div>
    )
}
