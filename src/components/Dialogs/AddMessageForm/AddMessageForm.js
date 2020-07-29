import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength150 = maxLengthCreator(150)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               name={'newMessageBody'}
               placeholder={'Enter your message'}
               validate={[required, maxLength150]} />
      </div>
      <div>
        <button >Send message</button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)
