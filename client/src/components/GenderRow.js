const GenderRow = ({ setGender, gender, setEmail, email }) => {
    const genders = ['Femail', 'Male']

    return (
        <div className="gender row">
            <div className="">
                <label htmlFor="gender">GENDER</label>
                <select
                    id="gender"
                    className={gender && gender !== 'Select Gender' ? 'field-green-thin' : 'field-red-thin'}
                    tabIndex='7'
                    onChange={e => setGender(e.target.value)}
                >
                    <option>Select Gender</option>
                    {genders.map(gender => <option key={gender}>{gender}</option>)}
                </select>
            </div>

            <div className="email">
                <label htmlFor="email">E-MAIL</label>
                <input 
                    id='email'
                    placeholder='example@mail.com'
                    type="email"
                    className={email  ? 'field-green-thin' : 'field-red-thin'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>

        </div>
    )
}

export default GenderRow
