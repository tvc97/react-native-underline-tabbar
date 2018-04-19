/**
 * Created by Konstantin Yakushin.
 * react-native-underline-tabbar
 * Allmax Team 2017
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    paddingVertical: 16,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  scrollContainer: {
    paddingRight: 20,
    flexGrow: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  tabs: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#d2d2d2',
  },
  badgeBubble: {
    marginTop: 4,
    marginLeft: 5,
    height: 12,
    width: 17,
    borderRadius: 4.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 9,
    fontWeight: 'bold',
    backgroundColor: 'white',
    top: -0.5,
  },
});