export default function validatestatement(values) {
    let errors = {};
  
    if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.address) {
        errors.address = "address is required!";
      }
      if (!values.cin) {
        errors.cin = "cin is required";
      } else if (values.cin.length !== 8 || isNaN(values.cin)) {
        errors.cin = "cin must be  8 number";
      }
      if (!values.statement) {
        errors.statement = "statement is required!";
      }
    return errors;
  }