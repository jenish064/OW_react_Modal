import { useState } from "react";
import {useUpdateEffect} from "react-use"


function VldtForm(props) {

  //data/json
  const InitialData = {
    name: "",
    organization: "",
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(InitialData)
  const [errorList, setErrorList] = useState({})

  //event handling
  const handleOnChange = (e) => {
    const key = e.target.name;
    const val = e.target.value;

    console.log("start of handle oncHANGE")
    setFormData({...formData, [key]: val})
    console.log("start of handle oncHANGE")
  }

  const validate = (fData) => {
    const errors = {}

    if (fData.name.length === 0) {
      errors.name = "Enter valid user name"
    }
    if (fData.organization.length === 0) {
      errors.organization = "Enter valid Organization name"
    }
    if (fData.email.length === 0) {
      errors.email = "Enter valid email id name"
    }
    if (fData.password.length === 0) {
      errors.password = "Enter valid Password"
    }

    return errors
  }

  useUpdateEffect(() => {
    setErrorList(validate(formData))
  }, [props.okFlag])


  return (
    <div className="VldtForm">

      <form>
      
      <label>Name: </label>
      <input onChange={handleOnChange} 
      placeholder="Enter user name"
      type="text"
      name="name"
      value={formData.name}
      />
      <p style={{color: "red"}}>{errorList.name}</p> <br></br><br></br>
      
      <label>Organization: </label>
      <input onChange={handleOnChange} 
      placeholder="Enter org. name"
      type="text"
      name="organization"
      value={formData.organization}
      />
      <p style={{color: "red"}}>{errorList.organization}</p> <br></br><br></br>
      
      <label>Email Id: </label>
      <input onChange={handleOnChange}
      placeholder="Enter email id"
      type="email"
      name="email"
      value={formData.email}
      />
      <p style={{color: "red"}}>{errorList.email}</p> <br></br><br></br>
      
      <label>Password: </label>
      <input onChange={handleOnChange} 
      placeholder="Type in password"
      type="password"
      name="password"
      value={formData.password}
      />
      <p style={{color: "red"}}>{errorList.password}</p> <br></br><br></br>

      {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default VldtForm;