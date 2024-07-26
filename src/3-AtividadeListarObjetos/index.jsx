// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.

import { useState } from "react";

export default function Home() {
 
  const [listaProdutos, setListaProdutos] = useState([
  { id: 1, nome:"O Grito", preco: 'R$1.000.000'},
  { id: 2, nome:"Céu Estrelado", preco: 'R$100.000'},
  { id: 3, nome:"Mona Lisa", preco: 'R$100.000.000'}
])

  return (
    <div>
        <h1>Catalogo de Artes</h1>

        {
          listaProdutos.map((obra)=>
          <div key={obra.id}>
            <p>{obra.nome}: {obra.preco}</p>
          </div>
        )
        }
    </div>
   
  );
}
