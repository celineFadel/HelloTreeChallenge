import React from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';

import { HomeFlatListItemStyles } from '../library/stylesheet';

export default class HomeFlatListItem extends React.Component {
    render() {
        return(
            <View style={HomeFlatListItemStyles.container}>
                <View style={HomeFlatListItemStyles.row}>
                    <Text adjustsFontSizeToFit={true} style={HomeFlatListItemStyles.title}>{this.props.title}</Text>
                    <View style={this.props.priority==1 ? HomeFlatListItemStyles.priorityContainer : HomeFlatListItemStyles.priorityContainerRed}>
                        <Text adjustsFontSizeToFit={true} style={HomeFlatListItemStyles.priorityText}>{this.props.priorityText}</Text>
                    </View>
                </View>

                <Text adjustsFontSizeToFit={true} style={HomeFlatListItemStyles.priorityText}>{this.props.subtitle}</Text>
                <Text adjustsFontSizeToFit={true} style={HomeFlatListItemStyles.priorityText}>{this.props.due}</Text>
            </View>
        );
    }
}