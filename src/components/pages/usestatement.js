import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {
    
    const initiaValues = {username:"", address:"", cin:"",statement:"", note:"", };
    const [formValues, setformValues]= useState(initiaValues);
    const [formErrors, setformErrors]= useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
      const { name, value } = e.target;
      setformValues({
        ...formValues,
        [name]: value
      });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      
      setformErrors(validate(formValues));
      if (!(Object.keys(formErrors).length === 0 )) {
        axios.post('http://localhost:4000/app/Statement',formValues)
        .then(setIsSubmit(true))
      }
      
      
    };
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    return { handleChange, handleSubmit, formValues, formErrors };
  };

export default useForm;