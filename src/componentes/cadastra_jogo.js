import './cadastro_jogo.css';
import { use, useState } from "react";

export default function Listar_Jogos() {
  const [lista_jogos, set_lista_jogos] = useState([]);
  const [nome, set_nome] = useState("");
  const [descricao, set_descricao] = useState("");
  //Precisamos pegar o valor do nome e da descrição

  const Criar_Novo_Jogo = () => {
    const novo_jogo = { nome, descricao };
    set_lista_jogos([...lista_jogos, novo_jogo]);
    set_nome("");
    set_descricao("");
  };

  return (
    <section class="container_formulario">
      <div class="div_formulario">
        <input
          type="text"
          placeholder="Digite o nome"
          id="nome"
          value={nome}
          onChange={(e) => set_nome(e.target.value)}
        />
        <input
          type="text"
          id="descricao"
          placeholder="Digite a descrição"
          value={descricao}
          onChange={(e) => set_descricao(e.target.value)}
        />
        <button id = "button" onClick={Criar_Novo_Jogo}>Adicionar novo item</button>
        <button id = "button" >Remover todos da lista</button>

        {lista_jogos.map((elemento, indice) => (
          <div key = {indice} class = "card_jogo">
            <p>{elemento.nome}</p>
            <p>{elemento.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
