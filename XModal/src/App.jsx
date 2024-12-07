import { useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState({
    username: "", email: "", phone: "", dob: "",
  })

  const [isopen, setIsopen] = useState(false);

  const changeHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setData({ ...data, [id]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (String(data.phone).length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    let date = new Date();
    let today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate() < 10 ? `${0}${date.getDate()}` : date.getDate()}`;
    if (Number(today) < Number(data.dob.split("-").join(""))) {
      alert("Invalid date of birth.Date of birth cannot be in the future");
      return;
    }

    let newData = { username: '', email: "", phone: "", dob: "" };
    setData(newData);
  }


  return (
    < >
      <div className='page' onClick={() => setIsopen(false)}>
        <h1>User Details Modal</h1>
        <button onClick={(e) => { e.stopPropagation(); setIsopen(true) }}>Open Form</button>
        <br />

        {isopen ?
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" >
              <form onSubmit={(e) => submitHandler(e)}>
                Fill Deatils
                <br />
                <br />

                <label htmlFor='username'>Username:</label>
                <input typeof='text' required value={data.username} onChange={(e) => changeHandler(e)} id='username' />
                <br /> <br />

                <label htmlFor='email'>Email Address:</label>
                <input type='email' required value={data.email} id='email' onChange={(e) => changeHandler(e)} />
                <br /> <br />

                <label htmlFor='phone'>Phone Number : </label>
                <input type='number' required value={data.phone} id='phone' onChange={(e) => changeHandler(e)} />
                <br /> <br />

                <label htmlFor='dob'>Date of Birth:</label>
                <input type='date' required value={data.dob} id='dob' onChange={(e) => changeHandler(e)} />
                <br /> <br />

                <input type='submit' className='submit-button' value="Submit" />

              </form>
            </div>
          </div> :
          null}
      </div>
    </ >
  )
}

export default App
