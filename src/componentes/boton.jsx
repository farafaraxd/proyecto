import React from 'react';

const Boton=(props)=>{

const onClick=(valor)=>{
  console.log(valor)
}










  return <button onclick={()=>onClick(props.valor)}>{props.valor}</button>
}

export default Boton











