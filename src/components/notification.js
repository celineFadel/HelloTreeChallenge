import React from 'react';
import { Text, View, } from 'react-native';

import { NotificationStyles } from '../library/stylesheet';

export default class Notification extends React.Component {
    render() {
        return(
            <View style={NotificationStyles.container}>
                <Text adjustsFontSizeToFit={true} style={NotificationStyles.authorText}>{this.props.author}</Text>
                <Text adjustsFontSizeToFit={true} style={NotificationStyles.contentText}>{this.props.content}</Text>
            </View>
        );
    }
}