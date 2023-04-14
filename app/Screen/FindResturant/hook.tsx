import { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ResData {
    placeTypes : []
    coordinate : {}
    placeId: string
    placeName: string
    detail: string
    photo : string
}


// photo pattern `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${}&key=${GOOGLE_MAPS_APIKEY}`
const useHooks = (props:any) => {
    const { GOOGLE_MAPS_APIKEY } = props;
    const [ resDataNearBy , setResDataNearBy ] = useState(false);
    let places:any = []

    const getLatLngLocation = async (name:string) => {
      const resp: string = await AsyncStorage.getItem(name) || ''
      return JSON.parse(resp)
    }




    const fetchNearBy:Function = async (keyWord:string) => {
      const { lat , lng }:any = await getLatLngLocation('Location');
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat || 13.8939866},${lng || 100.5163136}&radius=2000&type=restaurant${keyWord ? `&keyword=${keyWord}` : ''}&key=${GOOGLE_MAPS_APIKEY}`
        try {
          const { data } = await axios.get(url)
          if(data){
            for (let googlePlace of data.results) {
               let place = {} as ResData;
              let myLat = googlePlace.geometry.location.lat;
              let myLong = googlePlace.geometry.location.lng;
              let coordinate = {
                latitude: myLat,
                longitude: myLong,
              };
              place.placeTypes = googlePlace.types;
              place.coordinate = coordinate;
              place.placeId = googlePlace.place_id;
              place.placeName = googlePlace.name;
              place.detail = googlePlace.vicinity;
              place.photo = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${googlePlace?.photos[0]?.photo_reference}&key=${GOOGLE_MAPS_APIKEY}`
              places.push(place);
            }
          }
        }catch(e) {
          console.log('error =',e)
        }
        setResDataNearBy(places || []);
    }




    useEffect(()=>{
        fetchNearBy()
    },[])

  return {
    resDataNearBy,
    fetchNearBy,
  }
}

export { useHooks };