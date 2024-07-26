// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

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
            <button onClick={() => adicionarItemPedidos(obra)}>Adicionar</button>
          </div>
        )}
        {
          listaPedidos.map((obra)=> 
          <div key={obra.id}>
            <p>{obra.nome}: {obra.preco}</p>
            </div>
            )}
    </div>
   
  );
}
