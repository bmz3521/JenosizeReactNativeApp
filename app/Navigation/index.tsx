
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, FindResturant, Map } from '../Screen/index';
import { Icon } from '@comp';

type RootStackParamList = {
    Home: undefined;
    FindResturant: undefined;
    Map: undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();

const configHeader = {
  headerTitleAlign: 'center',
  headerBackImage: () => (<Icon solid color={'white'} name="angle-left" size={30} />),
  headerTitleStyle: {
    fontWeight: 'bold',
    color : 'white'
  },
  headerStyle: {
    backgroundColor: '#00b0a7',
  },
}
  export default function MainNavigator(props:any){
      return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}  options={{headerShown: false}}/>
            <Stack.Screen 
            name="FindResturant" 
            component={FindResturant}  
            options={({ route }:any) => ({
              title : route.params.name,
              ...configHeader
            })}
            />
            <Stack.Screen 
            name="Map" 
            component={Map} 
            options={({ route }:any) => ({
              title : route.params.name,
              ...configHeader
            })}
            />
        </Stack.Navigator>
      )
  }