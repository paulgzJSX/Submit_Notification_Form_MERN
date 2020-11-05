const Controls = ({ isDisabled }) => {
    return (
        <div className="controls" type='submit'>
            <button 
                className='submit' 
                disabled={isDisabled}
                tabIndex='8'
            >
                SUBMIT
            </button>
        </div>
    )
}

export default Controls
