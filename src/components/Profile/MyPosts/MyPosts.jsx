import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postData = [{id: 1, message: 'Hi', likesCount: 11},
                  {id: 2, message: 'How is your it-kamasutra?', likesCount: 52},
                  {id: 3, message: 'Yo', likesCount: 2},
                  {id: 4, message: 'How are you', likesCount: 6},
                  {id: 5, message: 'Hey, long time no see', likesCount: 14},
                  {id: 6, message: 'How have you been?', likesCount: 18}];
  return (      
    <div className={s.postsBlock}>
      <h3>There is my posts</h3>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
        <Post message={postData[2].message} likesCount={postData[2].likesCount}/>
        <Post message={postData[3].message} likesCount={postData[3].likesCount}/>
        <Post message={postData[4].message} likesCount={postData[4].likesCount}/>
        <Post message={postData[5].message} likesCount={postData[5].likesCount}/>
      </div>
      
    </div> 
  )
}

export default MyPosts;