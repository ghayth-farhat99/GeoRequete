import React,{useState} from "react";
import './model.css';

import useForm from './usestatement';
import validate from './validatestatement';
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 36.803484,
  lng: 10.184944,
};

const Services= ({ submitForm }) => {
  const { handleChange, handleSubmit, formValues, formErrors } = useForm(
    submitForm,
    validate
  );
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  }); 
  const [modal, setModal] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  
    const closeModal = () => {
    setModal(!modal);
  };


  const toggleModal = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
    setModal(!modal);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";


    
  return (
    <div>
      <GoogleMap
        mapTypeId="satellite"
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={center}
        options={options}
        onClick={toggleModal}
        onLoad={onMapLoad}
      >  
     
       {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
           
          />
        ))}   
             
      </GoogleMap>
      {modal && (
        <div className="modal">
          <div onClick={closeModal} className="overlay"></div>
          <div className="modal-content">
          
          <form onSubmit={handleSubmit}>
          <div>
            <label>
            username :
            <input 
            className='form-input'
            type="text"
            name='username'
            value={formValues.username}
            placeholder='Enter your username'
            onChange={handleChange} />        
            </label>
              {formErrors.username && <p>{formErrors.username}</p>}
            <br />
            </div>

            <div>
            <label>
            Address :
            <input 
            className='form-input'
            type="text"
            name='address'
            value={formValues.address}
            placeholder='Enter your address' 
            onChange={handleChange}/>        
            </label>
            {formErrors.address && <p>{formErrors.address}</p>}
            <br />
            </div>
           
            <div>
            <label>
            CIN :
            <input 
            className='form-input'
            type="text"
            name='cin'
            value={formValues.cin}
            placeholder='Enter your CIN' 
            onChange={handleChange}/>        
            </label>
            {formErrors.cin && <p>{formErrors.cin}</p>}
            <br />
            </div>

            <div>
            <label>
              Choose your statement:
           <select 
           name="statement"
           value={formValues.statement}
           onChange={handleChange}>     
           <option ></option>
            <option value="anarchist construct">anarchist construct</option>
            <option value="public lighting">public lighting</option>
            <option value="green spaces">green spaces</option>
            <option value="illegal trades ">illegal trades </option>
            <option value="streets ">streets </option>
            <option value="the cleanliness">the cleanliness</option>
            <option value="health and environment">health and environment</option>
            <option value="other complaints">other complaints</option>
          </select>
          </label>
            {formErrors.statement && <p>{formErrors.statement}</p>}
           <br />
           </div>

           <div>
            <label>
            Note :
            <textarea 
            className='form-input'
            type="text"
            name="note"
            value={formValues.note}
            placeholder='Enter your note' 
            onChange={handleChange}/>        
            </label>
            <br />
            </div>

            <div>
            <label>
            picture :
          <input 
            className='form-input'
            type="file" 
            name="img" 
            value={formValues.img}
            onChange={handleChange}
            accept="image/*" 
            capture/>       
            </label>
            <br />
            </div>

            <input className='form-input-btn' type="submit"  value="send"/>
          </form>
            <button className="close-modal" onClick={closeModal}>
            close
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
 }
export default Services;