import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
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

  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost;
      newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId)
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    }
    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText
  }
}

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE, profile
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS, status
  }
}

export const deletePost = (postId) => {
  return {
    type: DELETE_POST, postId
  }
}

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS, photos
  }
}

export const getUserProfile = (userId) => async (dispatch) => {

  let response = await usersAPI.getProfile(userId)

  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {

  let response = await profileAPI.getStatus(userId)

  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {

  let response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file) => async (dispatch) => {

  let response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  let userId = getState().auth.userId
  let response = await profileAPI.saveProfile(profile)

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
  }
}

export default profileReducer
