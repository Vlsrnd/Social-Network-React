import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  
  let posts =  [{id: 1, message: 'Hi', likesCount: 11, imgLink: 'morty.png'},
                {id: 2, message: 'How is your it-kamasutra?', likesCount: 52, imgLink: 'mario.png'},
                {id: 3, message: 'Yo', likesCount: 2, imgLink: 'morty.png'},
                {id: 4, message: 'How are you', likesCount: 6, imgLink: 'sonic.png'},
                {id: 5, message: 'Hey, long time no see', likesCount: 14, imgLink: 'Donald_Duck.png'},
                {id: 6, message: 'How have you been?', likesCount: 18, imgLink: 'chip.png'}];
  
  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} imgLink={p.imgLink}/>)

  return (      
    <div className={s.postsBlock}>
      <h3>There is my posts</h3>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>
        {postsElements}
      </div>
      
    </div> 
  )
}

export default MyPosts;