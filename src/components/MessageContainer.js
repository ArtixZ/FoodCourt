import React, { Component } from 'react';
import { MessageList } from './common';

class MessageContainer extends Component {
    state = {
        messages: null
    }
    
    render() {
        const messages = [
            {
                msg_id: '5I02W-16-8278a', 
                timestamp: 1403099033211, 
                direction: 'outgoing',
                body: {
                    type: 'txt', 
                    msg: 'Want something healthy',
                }
                
            },
            {
                msg_id: '5I02W-16-8278a', 
                timestamp: 1403099033211, 
                direction: 'ingoing',
                body: {
                    type: 'txt', 
                    msg: 'Received. Parsing...',
                }
            }

        ];
        return (
            <MessageList 
                messages={messages}
            />
        );
    }
}

export default MessageContainer;
