import {useRouter} from 'next/router' 


const Header = () => {

    const router = useRouter();

    return (
        <>
            <div>
                <h1 onClick={()=> router.push(`/`)} > Home </h1>
            </div>
        </>
    )
}

export default Header
