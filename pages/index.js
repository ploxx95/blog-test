
import imageUrlBuilder from '@sanity/image-url'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../component/Header'
import CardPost from '../component/ui/CardPost/CardPost'



export default function Home({posts}) {
   
  const router = useRouter()
  const [mappedPosts, setMappedPosts] = useState([])

    const PostedMap=(e)=>{
     
      let r =e.map((p,index)=>{
        console.log('esto es P  ',p)
        return ( 
          <div onClick={()=>router.push(`/post/${p.slug.current}`)} key={index} > 
          <CardPost key={index} title={p.title} image={p.mainImage}   ></CardPost>
           
           
          </div>
         )
      })
      return r;
  }


    useEffect(() => {
      if(posts.length){
        const imgBuilder= imageUrlBuilder({
          projectId:'8661jgrc',
          dataset: 'production',
        })
        setMappedPosts(posts.map(p=>{
          return {
            ...p,
            mainImage: imgBuilder.image(p.mainImage).width(500).height(250)
          }
        }))
      } else{
        setMappedPosts([])
      }
      
    }, [posts])

  return (
    <div className="container mx-auto px-4" >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <h1>Recent Posts</h1>
      <div className='grid grid-cols-4 gap-4' >
        {
          mappedPosts.length ? PostedMap(mappedPosts) :<h3>No Posts Yet</h3> 
        }
      </div>

    </div>
  )
}

export const getServerSideProps= async pageContext=>{
  const query= encodeURIComponent(`*[ _type == "post" ]`);
  const url = `https://8661jgrc.api.sanity.io/v1/data/query/production?query=${query}`
  const result= await fetch(url).then(res=>res.json())

  if(!result.result || !result.result.length ){
    return{
      props:{
        posts: [],
      }
    }
  }else {
    return {
      props: {
        posts: result.result,
      }
    }
  }

}