import React from 'react';
import CreatePost from './CreatePost';
import Post from './Post';
import { useSelector } from 'react-redux';

const Feed = () => {
  const {posts} = useSelector(store=>store.post);
  return (
    <div className='w-[55%] min-h-screen border-x border-gray-100'>
      <CreatePost />
      {
        posts?.map((post)=> <Post key={post?._id} post={post}/>)
      }
    </div>
  )
}

export default Feed