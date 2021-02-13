import React from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';

import { FontAwesome5, MaterialCommunityIcons, } from '@expo/vector-icons';

import { HomeWhiteBoxStyles } from '../library/stylesheet';
import { colors } from '../library/colors';

export default class HomeWhiteBox extends React.Component {
    render() {
        return(
            <View style={HomeWhiteBoxStyles.container}>
                {
                    this.props.date
                    ?
                        <View style={HomeWhiteBoxStyles.rowContainer}>
                            <Text adjustsFontSizeToFit={true} style={HomeWhiteBoxStyles.dateText}>Today</Text>
                            <FontAwesome5 name="calendar-alt" size={20} color={colors.grey} />
                        </View>
                    :
                        <View style={HomeWhiteBoxStyles.rowContainer}>
                            <Text adjustsFontSizeToFit={true} style={HomeWhiteBoxStyles.dateText}>Account</Text>
                            <MaterialCommunityIcons name="currency-usd-circle-outline" size={20} color={colors.grey} />
                        </View>
                }

                {
                    this.props.date
                    ?
                        <Text adjustsFontSizeToFit={true} style={HomeWhiteBoxStyles.dateText}>5 <Text adjustsFontSizeToFit={true} style={HomeWhiteBoxStyles.greyText}>/ 7</Text></Text>
                    :
                        <Text adjustsFontSizeToFit={true} style={HomeWhiteBoxStyles.dateText}>2,000,000L.L.</Text>
                }
            </View>
        );
    }
}