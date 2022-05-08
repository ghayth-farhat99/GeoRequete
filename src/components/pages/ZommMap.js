import react from 'react';
import Map from './Map';
import Marker from './Marker';
import { Wrapper } from '@googlemaps/react-wrapper';
export default function zomm(){
    const center = {
        lat: 36.803484,
        lng: 10.184944
      };
      const zoom = 10;
      const position = [{lat: 36.803484 , lan: 10.184944},center,];
    return(
        <Wrapper apikey={""} version={"beta"}>
            <Map center={center} zoom={zoom}>
            {position.map((position) =>( 
            <Marker position={position}/> 
            ))}
            </Map>
        </Wrapper>
        
    );
}