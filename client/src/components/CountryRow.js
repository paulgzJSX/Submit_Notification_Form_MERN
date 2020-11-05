import { useState, useEffect } from 'react'
import Axios from 'axios'

const CountryRow = ({ setCountry, country }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        Axios.get('https://covid19.mathdro.id/api/countries')
            .then(res => setCountries(res.data.countries.map(country => country.name)))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="country row">
            <label htmlFor="country">I LIVE IN</label>
            <select
                id="country"
                className={country && country !== 'Select Country' ? 'field-green' : 'field-red'}
                tabIndex='3'
                onChange={e => setCountry(e.target.value)}
            >
                <option>Select Country</option>
                {countries.map(country => <option key={country}>{country}</option>)}
            </select>
        </div>
    )
}

export default CountryRow
