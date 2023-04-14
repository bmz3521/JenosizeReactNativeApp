import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    Container : {
        backgroundColor : '#fafafa',
        flex: 1,
    },
    shadow : {
        borderRadius : 25,
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10,
    },
    logo : { 
        width : 200 , 
        height : 200,
        borderRadius : 25,
    },
    headerLogo : {
        justifyContent : 'center',
        alignItems : 'center',
        alignContent : 'center',
        height : '70%', 
    },
    body : {

        padding : 50,
        flex : 1
    },
})