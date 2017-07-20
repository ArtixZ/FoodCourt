import React  from 'react';
import { Text } from 'react-native';
import CardWrapper from '../wrappers/CardWrapper';
import SwipCard from '../wrappers/SwipCard';

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
            const { payload } = body;
            return (
                <SwipCard 
                    cards = {payload}
                />
            );
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
