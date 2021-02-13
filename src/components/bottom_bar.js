import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Entypo, EvilIcons, FontAwesome, MaterialCommunityIcons, MaterialIcons, } from '@expo/vector-icons';

import { BottomBarStyles } from '../library/stylesheet';

export default class Home extends React.Component {
    render() {
        return(
            <View style={BottomBarStyles.container}>
                <TouchableOpacity style={BottomBarStyles.iconContainer}>
                    <AntDesign name="home" size={25} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={BottomBarStyles.iconContainer}>
                    <Entypo name="suitcase" size={25} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={BottomBarStyles.iconContainer}>
                    <AntDesign name="calendar" size={25} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={BottomBarStyles.iconContainer}>
                    <MaterialCommunityIcons name="currency-usd-circle-outline" size={25} color="white" />
                </TouchableOpacity>
                
                <TouchableOpacity style={BottomBarStyles.iconContainer}>
                    <MaterialCommunityIcons name="account-group-outline" size={25} color="white" />
                </TouchableOpacity>
            </View>
        );
    }
}

