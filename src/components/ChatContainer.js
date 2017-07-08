import React, { Component } from 'react';
import { ChatBox } from './common';
import { connect } from 'react-redux';
import { messageSent } from '../actions';

class ChatContainer extends Component {
    state = {
        inputVal: null
    }

    onChangeInput(val) {
        this.setState({ inputVal: val });
    }
    
    onSend() {
        if (this.state.inputVal) {
            this.props.messageSent(this.state.inputVal);        
            this.setState({ inputVal: null });
        }
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


export default connect(null, {
    messageSent
})(ChatContainer);
