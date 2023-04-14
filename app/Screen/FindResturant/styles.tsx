import { StyleSheet } from "react-native";


export default StyleSheet.create({
    centerItem:{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: "dodgerblue",
        alignSelf: "center",
        textAlign: "center",
      },
      buttonBack:{
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "dodgerblue",
        marginRight:'auto'
      },
      buttonLabel: {
        fontSize: 12,
        fontWeight: "bold",
        color: "ghostwhite",
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      sectionContainer: {
        marginTop: 1,
        paddingLeft: 0,
        padding:20,
        // backgroundColor: "deepskyblue",
        flexDirection: "row",
      },
      tinyLogo: {
        width: 150,
        height: 150,
        borderRadius:10
      },
      content:{
        paddingHorizontal:12,
        color:"#00000075",
        fontWeight:'bold',
        fontSize:16,
        paddingTop : 10,
        maxWidth : '80%'
      },
      nameContent:{
        paddingLeft:12,
        color:"#000",
        fontWeight:'bold',
        fontSize:16,
        maxWidth : '90%'
      },
      leftContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }
  });