import React from 'react'
import style from './styles'
import { View, Text, Image } from 'react-native'
import { Button } from '@comp';
import { useHooks } from './hooks';
const Logo:any = 'https://st11.ning.com/topology/rest/1.0/file/get/2984834854?profile=RESIZE_710x&width=288&height=288&crop=1%3A1';

const Home = (props: any) => {
  const { navigation } = props;
  useHooks();
  return (
    <View style={style.Container}>
      <View style={{ flex : 1}}>
        <View style={style.headerLogo}>
          <View style={style.shadow}>
            <Image source={{uri : Logo}} style={style.logo}/>
          </View>
        </View>
        <View style={style.body}>
          <Button 
            title={'ค้นหาร้านอาหาร'} 
            onPress={()=> {
              navigation.navigate('FindResturant',{name:'ค้นหาร้านอาหาร'});
           }
          }
          />
          <Button 
            color={'#00b0a7'} 
            title={'แผนที่ บริษัท Jenosize'}
            onPress={()=> navigation.navigate('Map',{name:'แผนที่ บริษัท Jenosize'})}
          />
        </View>
      </View>
    </View>
  )
}

export default Home