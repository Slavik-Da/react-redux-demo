import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

  let state = props.dialogsPage

  let dialogsElements = state.dialogs
    .map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>
    )

  let messagesElements = state.messages
    .map(m => <Message key={m.id} id={m.id} text={m.message}/>
    )

  /*
    let newMessageBody = state.newMessageBody
  */

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) {
    return <Redirect to='/login'/>
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  )
}


export default Dialogs
