import { useState, useEffect } from 'react'
import { months } from '../data/data'
import {years, days, getMonth } from '../helpers/helpers'

const BirthdayRow = ({ setBirthday }) => {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState()


    useEffect(() => {
        if (day && month && year) {
            setBirthday(new Date(Date.UTC(year, getMonth(month, months), day, 1, 1)))
        }
    }, [day, month, year])


    return (
        <div className="birthday row">
            <label htmlFor="date">BIRTHDAY</label>
            <div className="date">
                <select 
                    id="day" 
                    // className='field-transperant' 
                    className={day ? 'field-green-thin' : 'field-red-thin'}
                    tabIndex='4'
                    onChange={e => setDay(e.target.value)}
                >
                    {days.map(day =>
                        <option key={day}>{day}</option>)}
                </select>
                <select 
                    id="month" 
                    // className='field-transperant' 
                    className={month ? 'field-green-thin' : 'field-red-thin'}
                    tabIndex='5'
                    onChange={e => setMonth(e.target.value)}
                >
                    {months.map(month =>
                        <option key={month}>{month}</option>)}
                </select>
                <select 
                    id="year" 
                    // className='field-transperant'
                    className={year ? 'field-green-thin' : 'field-red-thin'}
                    tabIndex='6'
                    onChange={e => setYear(e.target.value)}
                >
                    {years.map(year =>
                        <option key={year}>{year}</option>)}
                </select>
            </div>
        </div>
    )
}

export default BirthdayRow
