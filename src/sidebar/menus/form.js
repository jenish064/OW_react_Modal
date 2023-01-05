import { useState } from "react";
import { useDispatch } from "react-redux"
import { useUpdateEffect } from "react-use"

function VldtForm() {

  //data/json
  const InitialData = {
    name: "",
    organization: "",
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(InitialData)
  const [errorList, setErrorList] = useState({})
  const [allFilledFlag, setAllFilledFlag] = useState(false)

  //event handling
  const handleOnChange = (e) => {
    const key = e.target.name;
    const val = e.target.value;

    setFormData({ ...formData, [key]: val })
  }

  const validate = (fData) => {
    const errors = {}
    var emptyFields = 0;

    if (fData.name.length === 0) {
      errors.name = "Enter valid user name"
      emptyFields += 1;
    }
    if (fData.organization.length === 0) {
      errors.organization = "Enter valid Organization name"
      emptyFields += 1;
    }
    if (fData.email.length === 0) {
      errors.email = "Enter valid email id name"
      emptyFields += 1;
    }
    if (fData.password.length === 0) {
      errors.password = "Enter valid Password"
      emptyFields += 1;
    }

    if (emptyFields === 0) {
      setAllFilledFlag((prev) => !prev)
    }

    return errors
  }

  const dispatch = useDispatch((state) => state.jsonData)
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorList(validate(formData))
  }

  useUpdateEffect(() => {
    const jsonStr = JSON.stringify(formData, undefined, 2)
    dispatch({
      type: "UPDATE",
      payload: jsonStr
    })
  }, [allFilledFlag])

  return (
    <div className="VldtForm">

      <form onSubmit={handleSubmit}>

        <label>Name: </label>
        <input onChange={handleOnChange}
          placeholder="Enter user name"
          type="text"
          name="name"
          value={formData.name}
        />
        <p style={{ color: "red" }}>{errorList.name}</p> <br></br><br></br>

        <label>Organization: </label>
        <input onChange={handleOnChange}
          placeholder="Enter org. name"
          type="text"
          name="organization"
          value={formData.organization}
        />
        <p style={{ color: "red" }}>{errorList.organization}</p> <br></br><br></br>

        <label>Email Id: </label>
        <input onChange={handleOnChange}
          placeholder="Enter email id"
          type="email"
          name="email"
          value={formData.email}
        />
        <p style={{ color: "red" }}>{errorList.email}</p> <br></br><br></br>

        <label>Password: </label>
        <input onChange={handleOnChange}
          placeholder="Type in password"
          type="password"
          name="password"
          value={formData.password}
        />
        <p style={{ color: "red" }}>{errorList.password}</p> <br></br><br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default VldtForm;