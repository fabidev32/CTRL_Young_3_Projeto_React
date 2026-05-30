import "./cadastrar_jogo.css";
import Imagem from "./../imagem/adicionar_imagem";
import Jogo from "../jogo/card_jogo";
import { useState } from "react";

export default function Listar_Jogos() {
  const [jogos, set_jogos] = useState([]);
  const [nome, set_nome] = useState("");
  const [descricao, set_descricao] = useState("");
  const [link, set_link] = useState("");
  const [imagem, set_imagem] = useState("");

  // Esta função é chamada pelo Filho
  const salvarURL = (url) => {
    set_imagem(url);
  };

  const novoJogo = () => {
    const novo_jogo = {
      nome: nome,
      descricao: descricao,
      link: link,
      urlImagem: imagem, // Aqui a URL é salva no card
    };
    set_jogos([...jogos, novo_jogo]);
    // Limpa os inputs após adicionar
    set_nome("");
    set_descricao("");
    set_link("");
    set_imagem("");
  };

  const removerJogo = (indice) => {
    const copiaLista = [...jogos];
    copiaLista.splice(indice, 1);
    set_jogos(copiaLista);
  };

  return (
    <section class="container_formulario">
      <div class="div_formulario">
        <input
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => set_nome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite a descrição"
          value={descricao}
          onChange={(e) => set_descricao(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite o link do jogo"
          value={link}
          onChange={(e) => set_link(e.target.value)}
        />
        {/* Passamos a função salvarURL para o Filho */}
        <Imagem acessaURL={salvarURL} />
        <button id="cadastrar" onClick={() => novoJogo()}>
          Criar jogo
        </button>
        {/* Mostrar a lista de jogos */}
      </div>
      <div class="lista_de_jogos">
        {jogos.map((elemento, indice) => (
          <Jogo
            jogo={elemento}
            indice={indice}
            removerJogo={removerJogo}
          ></Jogo>
        ))}
      </div>
    </section>
  );
}
