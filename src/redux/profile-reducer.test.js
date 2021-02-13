import { addPost, deletePost, profileReducer } from "./profileReducer";

  const initialState = {
    posts: [{id: 1, message: 'Hi', likesCount: 11, imgLink: 'morty1.png'},
            {id: 2, message: 'How is your it-kamasutra?', likesCount: 52, imgLink: 'mario1.png'},
            {id: 3, message: 'Yo', likesCount: 2, imgLink: 'morty1.png'},
            {id: 4, message: 'How are you', likesCount: 6, imgLink: 'sonic1.png'},
            {id: 5, message: 'Hey, long time no see', likesCount: 14, imgLink: 'Donald_Duck1.png'},
            {id: 6, message: 'How have you been?', likesCount: 18, imgLink: 'chip1.png'}],
  };

it('length of posts should be incremented', () => {
  //1. prepare test data
  const action = addPost('test text');
  //2. do action
  const newState = profileReducer(initialState, action);
  //3. expectation
  expect(newState.posts.length).toBe(7);
});

it('message on new post should be correct', () => {
  //1. prepare test data
  const action = addPost('test text');
  const newState = profileReducer(initialState, action);
  expect(newState.posts[6].message).toBe('test text');
});

it('after deleting length of posts should be decrement', () => {
  let action = deletePost(1);
  const newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(5);
});
it(`after deleting length of posts shouldn't be changed if id is incorrect`, () => {
  let action = deletePost(1000);
  const newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(6);
});