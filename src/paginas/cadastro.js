import React from 'react'

function cadastro({ setModal}) {
    return (
        <div>
          Este é o cadastro
          <button onClick={ () => setModal(true) }>Abrir</button>
        </div>
    )
}

export default cadastro
