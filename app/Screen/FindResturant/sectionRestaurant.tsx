import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './styles';

interface Section {
    title : string
    image : string 
    children : any
}
const SectionUser = (props : Section) => {
    const {
        title, 
        image ,
        children
    } = props;

    return (
      <View style={styles.sectionContainer}>
        <Image style={styles.tinyLogo} source={{
            uri: image,
          }} />
          <View>
            <Text style={styles.nameContent}>
              {title}
            </Text>
            <Text style={styles.content}>
              {children}
            </Text>
          </View>
    </View>
    );
  }
  
const SectionRestaurant = (props:any) => {
  const { data = [] } = props;
    // const data = [
    //     {id : 0, first_name : 'milo', last_name : 'gift ', avatar : 'https://st11.ning.com/topology/rest/1.0/file/get/2984834854?profile=RESIZE_710x&width=288&height=288&crop=1%3A1', email : 'boomzaa@gmail.com'},
    //     {id : 2, first_name : 'milo', last_name : 'gift ', avatar : 'https://st11.ning.com/topology/rest/1.0/file/get/2984834854?profile=RESIZE_710x&width=288&height=288&crop=1%3A1', email : 'boomzaa@gmail.com'}
    // ]
    console.log('data ==',props)
  return (
    <View style={{flex:1}}>
          <ScrollView>
          {data.map((item:any,index:number)=>
            <SectionUser key={index} title={item.placeName} image={item.photo}>
              {item.detail}
            </SectionUser>
          )}
         </ScrollView>
      </View>
  )
}

export default SectionRestaurant