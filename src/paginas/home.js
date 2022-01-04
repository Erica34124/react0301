import React from 'react';

function home({ info }) {



    return (<>

        <div title='este é o titulo' style={{ color: 'green' }}></div>
            <h3> está é a home</h3>
            <h3>{info.nome}</h3>
            <p>R$ {info.preco}</p>
            
            <img className='imagem' src={info.fotos[0].src } alt={info.fotos[0].titulo } />


        
    </>
    )
}

export default home
