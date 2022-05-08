import React, {useEffect,useRef,ReactNode, useState} from "react";
import { Easing, Tween, update } from "@tweenjs/tween.js";
function Map({center,zoom,children}:{center: google.maps.LatLngAltitudeLiteral, zoom: Number,children: ReactNode}){
    
  const ref = useRef();
  const [map,setMap] = useState(null);
  const [tween,setTween] = useState(null);
  const style = {height:"100vh"};

  function animate(time: number) {
    requestAnimationFrame(animate);
    update(time);
  }

  requestAnimationFrame(animate);
 

  useEffect(() => {
   setMap( new window.google.maps.Map(ref.current, {
  center: {lat: 0 ,lng: 0},
zoom: 2 ,
})
);
  },[]);
  useEffect(() =>{if(map){
    if (tween){
      tween.stop();
    }
    const from = {
      center: map.getCenter().toJSON(), 
      zoom: map.getZoom(),
    };
    setTween (
      new Tween (from)
    .to({center, zoom},30000)
    .easing(Easing.Quadratic.Out)
    .onUpdate(({center, zoom}) => {
      map.moveCamera({ center, zoom});
    })
    .start()
    ); 

}
},[map , center , zoom]);

  return <div ref={ref} style={style} id="map">
      {React.Children.map(children,(child: ReactElement) =>
      React.cloneElement(child,{map})
      )}
  </div>;
}
export default Map;