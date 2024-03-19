import React, { Component } from 'react'
import ChatMessageWrapper from './chatMessageWrapper'

export class ChatMessage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { chat, messageDirection, messageClass } = this.props
    const [ date, time ] = chat.date.split(' ')

    return (
      <div className='message-box' style={{ float: messageDirection, textAlign: messageDirection }}>
        <div className={`messages ${messageClass}`}>
          {chat.content}
        </div>
        <div className='messages-datetime'>
          {date} {time}
        </div>
      </div>
    )
  }
}

export default ChatMessageWrapper(ChatMessage)
