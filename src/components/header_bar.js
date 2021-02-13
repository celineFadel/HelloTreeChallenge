import React from 'react';
import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons, Octicons } from '@expo/vector-icons';

import { HeaderBarStyle } from '../library/stylesheet';

export default class HeaderBar extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView style={HeaderBarStyle.container}>
                
                <TouchableOpacity style={HeaderBarStyle.headerLeft} onPress={() => this.props.goBack ? this.props.goBack() : console.log("Hi")}>
                    {
                        this.props.notifications
                        ? <Ionicons name="chevron-back" size={24} color="white" />
                        : <Octicons name="three-bars" size={24} color="white" />
                    }    
                </TouchableOpacity>
                    
                
                <View style={HeaderBarStyle.headerTitleContainer}>
                    <Text adjustsFontSizeToFit={true} style={HeaderBarStyle.headerTitle}>{this.props.title}</Text>
                </View>

                <TouchableOpacity style={HeaderBarStyle.headerRight} onPress={() => this.props.goToNotifications()}>
                    
                    {
                        this.props.notifications
                        ? <View />
                        : <Ionicons name="notifications-outline" size={24} color="white" />
                    }   
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
        );
    }
}