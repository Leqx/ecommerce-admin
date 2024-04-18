import { UserLocationContext } from '@/context/user-location';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
} from '@react-google-maps/api';
import React, { useContext, useState } from 'react';

function GoogleMapView() {
  const { userLocation, setUserLocation } = useContext<any>(
    UserLocationContext
  );

  const [map, setMap] = useState();

  const containerStyle = {
    width: '100%',
    height: '200px',
  };

  return (
    <div>
      <LoadScript
        googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation}
          options={{ mapId: '327f00d9bd231a33' }}
          zoom={13}
          onLoad={(map) => setMap(map)}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: '/map-pointer.png',
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
