const NameRow = ({ setFirstName, setLastName, firstName, lastName }) => {

    return (
        <div className="name row">
            <div className="first-name">
                <label htmlFor="">FIRST NAME</label>
                <input
                    type='text'
                    className={firstName ? 'field-green' : 'field-red'}
                    autoComplete='none'
                    value={firstName}
                    tabIndex='1'
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div className="last-name">
                <label htmlFor="">LAST NAME</label>
                <input
                    type="text"
                    className={lastName ? 'field-green' : 'field-red'}
                    autoComplete='none'
                    tabIndex='2'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
        </div>
    )
}

export default NameRow
