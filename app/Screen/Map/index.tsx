import { View, InteractionManager} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import styles from './styles';


const Map = () => {
  const [renderMapView, setRenderMapView] = useState(false);
  const [region, setRegion] = useState({
    latitude: 13.8939866,
    longitude: 100.5163136,
    latitudeDelta: 0.006,
    longitudeDelta: 0.006,
  });
  const markNewRegion = useCallback(() => {
    setRegion(region);
  }, [setRegion]);
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setRenderMapView(true);
    });
  }, []);

  return (
    <View style={styles.homeContainer}>
      {renderMapView && (
        <View style={styles.innerContainer}>
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
            onRegionChangeComplete={markNewRegion}
            >
            <Marker
                coordinate={{ latitude: 13.8939866, longitude: 100.5163136 }}
                pinColor="#0D784F"
            />
            </MapView>
        </View>
      )}
    </View>
  );
};

export default Map;
