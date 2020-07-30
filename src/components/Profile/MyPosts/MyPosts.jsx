import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import user from './../../../assets/images/user.png'

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
  let postsElement =
    [...props.posts]
      .reverse()
      .map(p => {
        return <Post key={p.id}
                     message={p.message}
                     likes={p.likesCount}
                     imgSrc={p.imgSrc ? p.imgSrc : user}
        />
      })

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={styles.postsBlock}>
      <h2>My posts</h2>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={styles.posts}>
        {postsElement}
      </div>
    </div>
  )
})

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPostText'} component={Textarea}
               validate={[required, maxLength10]} placeholder={'Post message'}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;
