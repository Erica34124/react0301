import React from 'react'

function fechaModal({modal, setModal }) {
    if(modal === true){
    return (
        <div>
            <button onClick={ () => setModal(false)} >Fecha</button>
        </div>
    )
    }
    else{
        return null;
    }
}

export default fechaModal
