// Crie o estado `listaPedidos`.
// Dentro do componente, crie a função `adicionarItemPedidos`.
// A função recebe um parâmetro, que pode ser nomeado como `objeto`.
// Dentro da função, utilize `setListaPedidos` para adicionar o `objeto` à `listaPedidos`.
// Exemplo: `setListaPedidos([...listaPedidos, objeto]);`

import { useState } from "react";

export default function Home() {
 
  const [listaProdutos, setListaProdutos] = useState([
  { id: 1, nome:"O Grito", preco: 'R$1.000.000'},
  { id: 2, nome:"Céu Estrelado", preco: 'R$100.000'},
  { id: 3, nome:"Mona Lisa", preco: 'R$100.000.000'}
]);

const [listaPedidos, setListaPedidos] = useState([]);

const adicionarItemPedidos = (elemento) => {
  setListaPedidos([...listaPedidos, elemento])
}

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