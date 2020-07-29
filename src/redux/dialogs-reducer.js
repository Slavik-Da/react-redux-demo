const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
  dialogs: [
    {id: 1, name: 'Vitusya'},
    {id: 2, name: 'Slavik'},
    {id: 3, name: 'Mom'},
    {id: 4, name: 'Father'},
    {id: 5, name: 'Brother'},
    {id: 6, name: 'Dimon'},
  ],
  messages: [
    {id: 1, message: 'First message'},
    {id: 2, message: 'Second message'},
    {id: 3, message: 'Third message?'},
    {id: 4, message: 'Fourth message'},
    {id: 5, message: 'Fifth message'},
    {id: 6, message: 'Sixth message'},
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {

    case SEND_MESSAGE:
      let body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, {id: 7, message: body}]
      }

    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: SEND_MESSAGE,
    newMessageBody
  }
}


export default dialogsReducer
