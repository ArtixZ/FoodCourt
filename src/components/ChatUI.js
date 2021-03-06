import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
// import { connect } from 'react-redux';
// import { View, Title, Screen } from '@shoutem/ui';

import ChatContainer from './ChatContainer';
import MessageContainer from './MessageContainer';


const ChatUI = () => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <View style={{flex:12}}>
                <MessageContainer />
            </View>
            <View style={{flex:1}}>
                <ChatContainer />                
            </View>            
    </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    }
};
    
export default ChatUI;
