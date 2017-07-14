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
                    key={id}
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
        minHeight: 40,
        fontSize: 30
    }
};

export { MessageBubble };
