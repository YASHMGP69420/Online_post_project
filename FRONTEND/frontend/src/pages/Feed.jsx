import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
  
  const [post,setPost] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPost(res.data.posts)
    }).catch((err)=>{
      console.log(err);
    })    
  
  }, [])

  return (
    <section className='feed'>
        <h1>Feed</h1>
         <div className='posts'>
        {
          post.length > 0 ? (
            post.map((post)=>{
              return (
               
                <div className='post' key={post._id}>
                  <img src={post.image} alt="post" />
                  <p>{post.caption}</p>
                </div>
  
              )
            })
          ) : (
            <p>No posts available</p>
          )
        }
        </div>

    </section>
  )
}

export default Feed