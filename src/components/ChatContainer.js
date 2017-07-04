import React, { Component } from 'react';
import { ChatBox } from './common';

class ChatContainer extends Component {
    state = {
        inputVal: null
    }

    onChangeInput(val) {
        debugger;
    }
    
    onSend() {
        debugger
    }

    render() {
        return (
            <ChatBox
                label={null}
                placeholder='Text input'
                onChangeText={this.onChangeInput.bind(this)}
                value={this.state.inputVal}
                onSend={this.onSend.bind(this)}
            />);
    }
}

export default ChatContainer;
