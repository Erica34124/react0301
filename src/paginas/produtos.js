import React from 'react';


function produtos() {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
    return (
        <div>
          <h3 style={{color:'green'}}>Este é o produto</h3>
          {produtos.map((itens)=>
          <li style={{display:'block'}}>{itens.nome}
            {itens.propriedades.map((item)=><li >{item}</li>)}
          
          </li>
          )}
          
        
        </div>
    )
}

export default produtos
