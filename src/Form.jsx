import { useState } from "react"

export default function Form() {
  let [formData, setFormData] = useState({
    name: "",
    userName: "",
  })

  let handleChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((prevData) => {
      prevData[fieldName] = newValue;
      return { ...prevData }
    })
  }
  return (
    <>
      <h1>Name : {formData.name}</h1>
      <h1>userName : {formData.userName}</h1>
      <form action="">
        <input
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          value={formData.userName}
          onChange={handleChange}
          name="userName"
        />
        <button>Submit</button>
      </form>
    </>
  )
}