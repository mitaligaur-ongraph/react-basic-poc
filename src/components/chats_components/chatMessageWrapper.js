import React from "react";
import { SelectedUserContext } from './contexts/SelectedUserContext'

const ChatMessageWrapper = WrapperComponent => {
  class NewComponent extends React.Component {
    render() {
      return (
        <SelectedUserContext.Consumer>
          {
            userObj =>
              <WrapperComponent
                messageDirection={this.props.chat.senderId === userObj?.user?.id ? 'right' : 'left'}
                messageClass={this.props.chat.senderId === userObj?.user?.id ? 'self-messages' : 'other-messages'}
                {...this.props}
              />
          }
        </SelectedUserContext.Consumer>
      )
    }
  }

  return NewComponent
}

export default ChatMessageWrapper
