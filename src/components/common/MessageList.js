import React, { Component } from 'react';
import { ListView, Text, ScrollView } from 'react-native';
import { MessageBubble, CardSection } from './';

class MessageList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.state = {
            dataSource: ds.cloneWithRows(props.messages),
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.messages !== this.props.messages) {
            const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            this.setState({ dataSource: ds.cloneWithRows(nextProps.messages) });
        }
    }

    renderRow(rowData) {
        const { msg_id, timestamp, direction, body } = rowData;
        return (
            <CardSection>
                <MessageBubble
                    id={msg_id}
                    outOrIn={direction}
                    timestamp={timestamp}
                    body={body}
                />
            </CardSection>
             
        ); 
    }


    render() {
        const styles = {
            MessageListStyle: {
                paddingBottom: 12,
                flex: 16,
                flexDirection: 'column-reverse',
            }
        };
        return (
            <ListView 
                enableEmptySections
                style={styles.MessageListStyle}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            />
        ); 
    }   
}

export { MessageList }; 
