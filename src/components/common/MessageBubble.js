import React  from 'react';
import { Text } from 'react-native';

const MessageBubble = ({ id, outOrIn, timestamp, body }) => {
    
    const { type } = body;
    const { textStyle } = styles;
    const leftOrRight = outOrIn === 'outgoing' ? 'flex-end' : 'flex-start';
    switch (type) {
        case 'txt': 
            return (
                <Text 
                    style={{ ...textStyle, alignSelf: leftOrRight }}
                >
                    {body.msg}
                </Text>
            );
        case 'img':
            console.log(type);
        case 'card':
            console.log(type);
        default:
            console.log(type);
    }
}

const styles = {
    textStyle: {
    }
};

export { MessageBubble };
