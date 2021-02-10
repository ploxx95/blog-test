
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import { useEffect, useState } from 'react'
import Header from '../../component/Header';


const Post = ({body,title,image}) => {
    
    const [imageUrl, setImageUrl] = useState('');
    useEffect(() => {
        const imgBuilder= imageUrlBuilder ({
            projectId:'8661jgrc',
            dataset: 'production',
        })

        setImageUrl(imgBuilder.image(image))
    }, [image])

    return (
        <>
        <Header></Header>
            <h1>{title}</h1>
            <div> 
                {
                    image && <img src={imageUrl} />
                } 
                </div>
                <div>
                    <BlockContent blocks={body} />
                </div>
        </>
    )
}

export const getServerSideProps = async pageContext =>{
    const pageSlug= pageContext.query.slug;
    


if(!pageSlug){
    return { notFound: true }
}
const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`)
const url = `https://8661jgrc.api.sanity.io/v1/data/query/production?query=${query}`
const result= await fetch(url).then(res=>res.json())
const post = result.result[0];

    if(!post){
        return{
            notFound: true
        }
        }else{
            return {
                props: {
                    body: post.body,
                    title: post.title,
                    image: post.mainImage,
                }
            }
        }
    
}

export default Post
