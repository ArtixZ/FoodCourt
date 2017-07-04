import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
// import { connect } from 'react-redux';
// import { View, Title, Screen } from '@shoutem/ui';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import ChatContainer from './ChatContainer';

const ChatUI = () => (
    <KeyboardAvoidingView>
        <ChatContainer />
    </KeyboardAvoidingView>
);
    
export default ChatUI;
