import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
  posts: [
    {
      id: 1,
      message: 'Privet!',
      likesCount: 12,
      imgSrc: 'https://external-preview.redd.it/nAVcW4fuzsMnGo8D68qxK9WDFhg79Z32NzHsIl_pGxs.jpg?auto=webp&s=a5e05e6fb448e5337088fa6257815c62a86deae5'
    },
    {
      id: 2,
      message: 'Hi! ',
      likesCount: 19,
      imgSrc: 'https://lapcats.files.wordpress.com/2011/06/enhanced-buzz-26664-1303181778-6.jpg'
    },
    {
      id: 3,
      message: 'What`s up?',
      likesCount: 125,
      imgSrc: 'https://i.pinimg.com/originals/22/9d/06/229d0608063c9a3faee0d0b18f5455a4.jpg'
    },
  ]
}

test('Length of new post should be incremented', () => {
  // 1. Start data
  let action = addPostActionCreator("V")
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expected result
  expect(newState.posts.length).toBe(4)
});

test('After deleting length of messages should be decremented', () => {
  // 1. Start data
  let action = deletePost(1)
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expected result
  expect(newState.posts.length).toBe(2)
});

test('After deleting length shouldn`t be decrement if id is incorrect', () => {
  // 1. Start data
  let action = deletePost(200)
  // 2. action
  let newState = profileReducer(state, action)
  // 3. expected result
  expect(newState.posts.length).toBe(3)
});
