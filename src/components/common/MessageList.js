import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { MessageBubble } from './';

class MessageList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(props.messages),
        };
    }

    renderRow(rowData) {
        const { msg_id, timestamp, direction, body } = rowData;
        return (
             <MessageBubble
                id={msg_id}
                outOrIn={direction}
                timestamp={timestamp}
                body={body}
             />
        ); 
    }

    render() {
        const styles = {
            MessageListStyle: {
                flex: 12,
                height: 200,
                flexDirection: 'column-reverse',
            }
        };
        return (
            <ListView 
                style={styles.MessageListStyle}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        ); 
    }
    
}



export { MessageList }; 
