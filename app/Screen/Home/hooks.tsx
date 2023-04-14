import { useCallback, useEffect } from 'react'
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Linking, PermissionsAndroid, Platform, ToastAndroid } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


// photo pattern `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${}&key=${GOOGLE_MAPS_APIKEY}`
const useHooks = () => {


    const setLocalData = async (name:string,param:any) => {
      const format = JSON.stringify(param)
      await AsyncStorage.setItem(name,format)
    }

    const hasLocationPermissionIOS:Function = async () => {
        const openSetting = () => {
          Linking.openSettings().catch(() => {
            Alert.alert('Unable to open settings');
          });
        };
        const status = await Geolocation.requestAuthorization('whenInUse');
    
        if (status === 'granted') {
          return true;
        }
    
        if (status === 'denied') {
          Alert.alert('Location permission denied');
        }
    
        if (status === 'disabled') {
          Alert.alert(
            `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
            '',
            [
              { text: 'Go to Settings', onPress: openSetting },
              { text: "Don't Use Location", onPress: () => {} },
            ],
          );
        }
    
        return false;
      };
    const hasLocationPermission:Function = async () => {
        if (Platform.OS === 'ios') {
          const hasPermission = await hasLocationPermissionIOS();
          return hasPermission;
        }
    
        if (Platform.OS === 'android' && Platform.Version < 23) {
            
            getLocation()
          return true;
        }
    
        const hasPermission = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    
        if (hasPermission) {
        getLocation()
          return true;
        }
    
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    
        if (status === PermissionsAndroid.RESULTS.GRANTED) {
            
            getLocation()
          return true;
        }
    
        if (status === PermissionsAndroid.RESULTS.DENIED) {
          ToastAndroid.show(
            'Location permission denied by user.',
            ToastAndroid.LONG,
          );
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          ToastAndroid.show(
            'Location permission revoked by user.',
            ToastAndroid.LONG,
          );
        }
    
        return false;
      };


    const getLocation:Function = () => {
        Geolocation.getCurrentPosition(
            (position:any) => {
              const locate = {
                lat : position?.coords?.latitude || 0,
                lng : position?.coords?.longitude || 0
              }
              setLocalData('Location',locate)
            },
            (error:any) => {
              const region = {
                latitude: 13.736717,
                longitude: 100.523186,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              };
            },
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 5000 },
          );
          
    }

    const clearLocalData = async (name:string) => {
        await AsyncStorage.removeItem(name)
      }
      
    useEffect(()=>{
        hasLocationPermission()
        getLocation()
    },[])
    
    useFocusEffect(
        useCallback(() => {
          return () => {
            clearLocalData('Location');
            getLocation()
          };
        }, []),
      );

}

export { useHooks };