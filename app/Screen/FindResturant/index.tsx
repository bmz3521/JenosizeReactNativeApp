import { View, Text, ActivityIndicator } from 'react-native'
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useHooks } from './hook';
import SectionRestaurant from './sectionRestaurant';
import { Input } from '@comp';
const FindResturant = () => {
  const { 
    resDataNearBy,
    fetchNearBy,
   } = useHooks({
    GOOGLE_MAPS_APIKEY
  });
  
  return (
      <View style={{flex : 1, padding : 10}}>
        <Input onChangeText={(item:any)=> fetchNearBy(item)}/>
          <View style={{flex : 1, justifyContent : 'center', alignItems : 'center' }}>
        {
          resDataNearBy ? (
              <SectionRestaurant data={resDataNearBy} />
          ):(
            <ActivityIndicator size="large" />
            )
          }
        </View>
      </View>
  )
}

export default FindResturant

function getLocation() {
  throw new Error('Function not implemented.');
}
