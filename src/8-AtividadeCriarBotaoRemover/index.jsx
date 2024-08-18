// Dentro do `map`, crie um botão para cada item.
// Utilize o atributo `onClick` para definir a ação do botão.
// No valor do `onClick`, chame a função `removerItemPedidos`.
// Passe o identificador (`id`) do item como parâmetro para `removerItemPedidos`, o mesmo que você usa no `map`.
// No conteúdo do botão, coloque o texto "Remover".

// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.

// Para cada objeto renderizado, adicione um botão.
// Utilize o atributo onClick para o botão.
// No valor do onClick, passe a função adicionarItemPedidos, 
// por exemplo: onClick={() => adicionarItemPedidos(produto)}
// No conteúdo do botão, coloque o texto "Selecionar" ou algo semelhante.

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


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

const removerPedido = (id) => {
  let remover = false
  let listaAux = listaPedidos.filter((obra) =>{ 
      if (remover == false){
          if(obra.id !== id){
              return obra
          }else{
              remover = true;
              return null
          }
      }else{
          return obra
      }
  });
  setListaPedidos(listaAux);
};

  return (
    <div>
      <Header title={'Vendas de Obras de Artes'}/>
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
            <button onClick={()=> removerPedido(obra.id)}>Remover</button>
            </div>
            )}
            <Footer desenvolvedor={'Guilherme Henrique'}/>
    </div>
   
  );
}
