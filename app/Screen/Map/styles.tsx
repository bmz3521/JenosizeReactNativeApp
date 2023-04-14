import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    justifyContent : 'center',
    alignItems : 'center'
  },
    locationContainer: {
      flexDirection: 'row',
      marginVertical: 5,
      marginHorizontal: 20,
    },
    caption: { color: '#000', fontSize: 14, paddingLeft: 5 },
    map: {
      width: '100%',
      height: '100%',
    },
    innerContainer: {
      overflow: 'hidden',
      width: '90%',
      height: '90%',
      borderRadius : 15,
    },
});