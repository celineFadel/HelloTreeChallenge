import React from 'react';
import { Dimensions, FlatList, ImageBackground, Text, TouchableOpacity, View, } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import HeaderBar from '../components/header_bar';
import BottomBar from '../components/bottom_bar';
import Notification from '../components/notification';

import { NotificationsStyles } from '../library/stylesheet';
import { colors } from '../library/colors';

import { notifications_data } from '../../config';

export default class Home extends React.Component {
  constructor () {
    super();
    this.state = {
      
    };
  }

  componentDidMount = () => {

  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    const renderItem = ({ item }) => (
      <Notification author={item.author} content={item.content} />
    );
  
    return (
      <LinearGradient
        colors={[colors.primary_blue_light, colors.primary_blue_dark]}
        style={NotificationsStyles.container}
      >
        <HeaderBar notifications={true} title="Notifications" navigation={this.props.navigation} goBack={() => {this.goBack()}} />
        
        <View style={NotificationsStyles.boxContainer}>
          <Text adjustsFontSizeToFit={true} style={NotificationsStyles.authorText}>Admin</Text>
          <Text adjustsFontSizeToFit={true} style={NotificationsStyles.contentText}>Debited 2,000,000 L.L. in your account</Text>
          <View style={NotificationsStyles.insideContainer}>
            <TouchableOpacity style={NotificationsStyles.declineBtnContainer} onPress={() => {console.log(Dimensions.get("screen").width);}}>
              <Text adjustsFontSizeToFit={true} style={NotificationsStyles.declineText}>DECLINE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={NotificationsStyles.acceptBtnContainer}>
              <Text adjustsFontSizeToFit={true} style={NotificationsStyles.acceptText}>ACCEPT</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={NotificationsStyles.flatListContainer}>
          <FlatList
            data={notifications_data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <BottomBar />
      </LinearGradient>
    );
  } 
}