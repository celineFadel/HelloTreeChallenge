import { Dimensions, Platform, StyleSheet } from 'react-native';
import { colors } from './colors';

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const HeaderBarStyle = StyleSheet.create({
    container: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT*0.1,
      position:'absolute',
      top: 0,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: '5%',
    },
    headerLeft: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      width: '10%',
    },
    headerTitleContainer: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      width: '70%',
      marginHorizontal: '5%',
    },
    headerTitle: {
      color: 'white', 
      fontSize: 20, 
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: 'bold'
    },
    headerRight: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '5%',
      width: '10%',
    }
});

export const BottomBarStyles = StyleSheet.create({
  container: {
      width: SCREEN_WIDTH,
      height: Platform.OS == 'android' ? '15%' : '10%',
      paddingHorizontal: '3%',
      position:'absolute',
      bottom: 0,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',  
  },
  iconContainer: {
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      width: '19%',
  },
});

export const HomeStyles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: SCREEN_WIDTH * 0.05
  },
  backgroundContainer: {
    height: SCREEN_HEIGHT * 0.8,
    width: SCREEN_WIDTH,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: SCREEN_HEIGHT * 0.1,
  },
  profileRow: {
    height: SCREEN_HEIGHT * 0.08,
    width: '100%',
    backgroundColor: 'transparent',
    marginTop:  SCREEN_HEIGHT * 0.1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: '5%',
    flexDirection: 'row',
  },
  roundedImage: {
    width: SCREEN_HEIGHT*0.05,
    height: SCREEN_HEIGHT*0.05,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'white',
  },
  textColumn: {
    paddingHorizontal: '2%',
    justifyContent: 'center',
  },
  textFont: {
    color: 'white',
    fontSize: SCREEN_WIDTH>400 ? 17 : 13,
  },
  titleRow: {
    height: SCREEN_HEIGHT * 0.08,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: SCREEN_WIDTH>400 ? 23 : 20,
  },
  tasksText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: SCREEN_WIDTH>400 ? 23 : 20,
  },
  profileRowTwo: {
    height: SCREEN_HEIGHT * 0.08,
    width: '100%',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    flexDirection: 'row',
  },
  flatListContainer: {
    height: SCREEN_HEIGHT * 0.45,
    width: '100%',
    marginVertical: '15%',
  },
  floatingButton: {
    position: 'absolute',
    width: SCREEN_HEIGHT*0.06,
    height: SCREEN_HEIGHT*0.06,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: SCREEN_HEIGHT * 0.1,
    backgroundColor: colors.light_blue,
    borderRadius: 50,
  },
  floatingButtonText: {
    color: 'white',
    fontSize: SCREEN_WIDTH>400 ? 35 : 32,
    fontWeight: 'bold',
  },
});

export const HomeWhiteBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.1,
    marginVertical: '5%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: '5%',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
    color: colors.primary_blue_dark,
  },
  greyText: {
    fontWeight: 'bold',
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
    color: colors.grey,
  },
});

export const HomeFlatListItemStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.light_blue,
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT * 0.12,
    marginBottom: '5%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginHorizontal: '3%',
    padding: '5%',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
  },
  priorityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent_white,
    padding: '2%',
    borderRadius: 5,
    width: '35%',
  },
  priorityContainerRed: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    padding: '2%',
    borderRadius: 5,
    width: '35%',
  },
  priorityText: {
    color: 'white',
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
  },
});

export const NotificationsStyles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingHorizontal: SCREEN_WIDTH * 0.05
  },
  boxContainer: {
    backgroundColor: 'white',
    marginTop: SCREEN_HEIGHT * 0.13,
    borderRadius: 10,
    width: '100%',
    height: Platform.OS=='android' ? SCREEN_HEIGHT * 0.2 : SCREEN_HEIGHT * 0.15,
    padding: '5%',
  },
  authorText: {
    fontWeight: 'bold',
    color: colors.primary_blue_dark,
    marginBottom: '3%',
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
    height: '15%',
  },
  contentText: {
    color: colors.primary_blue_dark,
    height: '15%',
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
  },
  insideContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '5%',
    height: '40%',
  },
  declineBtnContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary_blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SCREEN_WIDTH>400 ? '3%' : '1%',
    width: '48%',
  },
  declineText: {
    color: colors.primary_blue_dark,
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
    fontWeight: 'bold',
  },
  acceptBtnContainer: {
    backgroundColor: colors.primary_blue_light,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.primary_blue_dark,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SCREEN_WIDTH>400 ? '3%' : '1%',
    width: '48%',
  },
  acceptText: {
    color: 'white',
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
    fontWeight: 'bold',
  },
  flatListContainer: {
    height: Platform.OS == 'android' ? SCREEN_HEIGHT*0.55 : SCREEN_HEIGHT * 0.6,
    width: '100%',
    marginTop: SCREEN_HEIGHT * 0.03,
  },
});

export const NotificationStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: SCREEN_HEIGHT * 0.09,
    marginBottom: '5%',
    borderRadius: 10,
    padding: '5%',
    justifyContent: 'center',
  },
  authorText: {
    fontWeight: 'bold',
    color: colors.primary_blue_dark,
    marginBottom: '3%',
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
  },
  contentText: {
    color: colors.primary_blue_dark,
    fontSize: SCREEN_WIDTH>400 ? 15 : 11,
  },
});