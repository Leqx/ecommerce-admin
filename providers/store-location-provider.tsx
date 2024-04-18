'use client';

import { UserLocationContext } from '@/context/user-location';
import { useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export function LocationProvider({ children }: Props) {
  const [userLocation, setUserLocation] = useState<any>([]);

  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      // console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <>
      <>
        <UserLocationContext.Provider
          value={{ userLocation, setUserLocation }}
        >
          {children}
        </UserLocationContext.Provider>
      </>
    </>
  );
}
