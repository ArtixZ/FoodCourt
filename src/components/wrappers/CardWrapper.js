import React from 'react';
import { View, Text, Image } from 'react-native';

import { CardHorizontal, CardSection } from '../common';


const CardWrapper = ({ thumbnail_image, foodName, tags, suggestion, rating, price }) => {

    const { thumbnailStyle, thumbnailContainerStyle, contentStyle } = styles;

    return (
        <CardHorizontal>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <Text>{suggestion}</Text>
            </CardSection>
                <View style={contentStyle}>
                    <Text>{foodName}</Text>
                    <Text>{rating}</Text>
                    <Text>{tags}</Text>
                    <Text>{`$${price}`}</Text>
                </View>
            <CardSection>
            </CardSection>
        </CardHorizontal>
    );
};

const styles = {
    contentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 100,
        width: 100
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
}

export default CardWrapper;