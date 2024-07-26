// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

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
    </div>
   
  );
}

