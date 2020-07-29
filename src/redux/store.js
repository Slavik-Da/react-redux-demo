import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {

    profilePage: {
      posts: [
        {
          id: 1,
          message: 'Privet',
          likesCount: 12,
          imgSrc: 'https://external-preview.redd.it/nAVcW4fuzsMnGo8D68qxK9WDFhg79Z32NzHsIl_pGxs.jpg?auto=webp&s=a5e05e6fb448e5337088fa6257815c62a86deae5'
        },
        {
          id: 2,
          message: 'Nice to meet you',
          likesCount: 19,
          imgSrc: 'https://lapcats.files.wordpress.com/2011/06/enhanced-buzz-26664-1303181778-6.jpg'
        },
        {
          id: 2,
          message: 'Thank you!',
          likesCount: 125,
          imgSrc: 'https://i.pinimg.com/originals/22/9d/06/229d0608063c9a3faee0d0b18f5455a4.jpg'
        },

      ],
      newPostText: 'it-slavik'
    },

    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Vitusya'},
        {id: 2, name: 'Slavik'},
        {id: 3, name: 'Mama'},
        {id: 4, name: 'Papa'},
        {id: 5, name: 'Bro'},
        {id: 6, name: 'Friend'},
      ],
      messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Hiiii'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Pretty good'},
        {id: 5, message: 'How about you?'},
        {id: 6, message: 'I am ok'},
      ],
      newMessageBody: ''

    },

    sidebar: {}
  },
  _callSubscriber() {
  },

  subscribe(observer) {
    this._callSubscriber = observer // observer pattern
  },
  getState() {
    return this._state
  },


  dispatch(action) { //type : 'ADD-POST'

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }

}

window.store = store

export default store
