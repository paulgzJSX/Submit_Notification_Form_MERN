import React from 'react'

const Modal = ({ setDisplayModal, email }) => {
    const handleClick = () => {
        setDisplayModal(false)
        window.location.href='/'
    }

    return (
        <div className='modal'>
            <div className="modal-content">
                <h3>Thank You!</h3>
                <h3>Data has been succesfully submitted!</h3>
                <h3>Email sent to: {email}</h3>
                <button className='submit' onClick={handleClick}>CLOSE</button>
            </div>
        </div>
    )
}

export default Modal
