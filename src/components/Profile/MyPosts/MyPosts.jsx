import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  
  let posts = [{id: 1, message: 'Hi', likesCount: 11},
                  {id: 2, message: 'How is your it-kamasutra?', likesCount: 52},
                  {id: 3, message: 'Yo', likesCount: 2},
                  {id: 4, message: 'How are you', likesCount: 6},
                  {id: 5, message: 'Hey, long time no see', likesCount: 14},
                  {id: 6, message: 'How have you been?', likesCount: 18}];
  
  let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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