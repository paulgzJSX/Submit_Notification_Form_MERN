import { useState, useEffect } from 'react'
import image from './images/jumping_man.jpg'
import BirthdayRow from './components/BirthdayRow'
import CountryRow from './components/CountryRow'
import NameRow from './components/NameRow'
import GenderRow from './components/GenderRow'
import Controls from './components/Controls'
import Axios from 'axios'
import Modal from './components/Modal'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [country, setCountry] = useState('')
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [displayModal, setDisplayModal] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    Axios.post('http://localhost:4000/data', { firstName, lastName, birthday, country, gender, email })
      .then(res => {
        console.log(res)
        setDisplayModal(true)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (firstName && lastName && country && birthday && gender && email && country !== 'Select Country' && gender !== 'Select Gender') {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [firstName, lastName, country, birthday, gender, email])


  return (
    <main>
      {displayModal && <Modal setDisplayModal={setDisplayModal} email={email} />}
      <div className="card">
        <div className="left-side">
          <img src={image} alt="jumping man" />
        </div>
        <div className="right-side">
          <h2>TELL US ABOUT YOURSELF...</h2>
          <form onSubmit={handleSubmit}>
            <NameRow setFirstName={setFirstName} setLastName={setLastName} firstName={firstName} lastName={lastName} />
            <CountryRow setCountry={setCountry} country={country} />
            <BirthdayRow setBirthday={setBirthday} />
            <GenderRow setGender={setGender} gender={gender} setEmail={setEmail} email={email} />
            <Controls isDisabled={isDisabled} />
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
