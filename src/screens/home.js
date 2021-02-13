import React from 'react';
import { FlatList, ImageBackground, Text, TouchableOpacity, View, } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import HeaderBar from '../components/header_bar';
import BottomBar from '../components/bottom_bar';
import HomeWhiteBox from '../components/home_white_box';
import HomeFlatListItem from '../components/home_flatlist_item';

import { HomeStyles } from '../library/stylesheet';
import { colors } from '../library/colors';

import { home_flatlist_data } from '../../config';

export default class Home extends React.Component {
  constructor () {
    super();
    this.state = {
      
    };
  }

  componentDidMount = () => {

  }

  goToNotifications = () => {
    this.props.navigation.navigate('Notifications');
  }

  render() {
    const renderItem = ({ item }) => (
      <HomeFlatListItem title={item.title} subtitle={item.subtitle} priority={item.priority} due={item.due} priorityText={item.priorityText} />
    );
  
    return (
      <LinearGradient
          colors={[colors.primary_blue_light, colors.primary_blue_dark]}
          style={HomeStyles.container}
      >
        <HeaderBar navigation={this.props.navigation} goToNotifications={() => {this.goToNotifications()}} />
          <View style={HomeStyles.profileRow}>
            <ImageBackground resizeMode="contain" source={ {uri: "http://pngimg.com/uploads/man/man_PNG6531.png"} } style={HomeStyles.roundedImage}></ImageBackground>
            <View style={HomeStyles.textColumn}>
              <Text adjustsFontSizeToFit={true} style={HomeStyles.textFont}>Good Morning,</Text>
              <Text adjustsFontSizeToFit={true} style={HomeStyles.textFont}>Auguste</Text>
            </View>
          </View>

          <View style={HomeStyles.titleRow}>
            <Text adjustsFontSizeToFit={true} style={HomeStyles.titleText}>You have <Text style={HomeStyles.tasksText}>3 tasks</Text> today</Text>
            <Text adjustsFontSizeToFit={true} style={HomeStyles.titleText}>Let's get started!</Text>
          </View>

          <View style={HomeStyles.profileRowTwo}>
            <HomeWhiteBox date={true} />
            <HomeWhiteBox date={false} />
          </View>

          <View style={HomeStyles.flatListContainer}>
            <FlatList
              data={home_flatlist_data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>

          <TouchableOpacity style={HomeStyles.floatingButton}>
            <Text adjustsFontSizeToFit={true} style={HomeStyles.floatingButtonText}>+</Text>
          </TouchableOpacity>
          
        <BottomBar />
      </LinearGradient>
    );
  } 
}