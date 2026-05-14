import "./cadastrar_jogo.css";
import Imagem from "./../imagem/adicionar_imagem";
import Jogo from "../jogo/card_jogo";
import Campo from "../input/campo";
import { useState } from "react";

export default function Listar_Jogos() {
  const [jogos, set_jogos] = useState([]);
  const [nome, set_nome] = useState("");
  const [descricao, set_descricao] = useState("");
  const [link, set_link] = useState("");
  const [imagem, set_imagem] = useState("");
  const [favoritos, setFavoritos] = useState([]);

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
    // Limpa os campos após adicionar
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

  const adicionarAosFavoritos = (indice) => {
    const jogoSelecionado = jogos[indice];
    setFavoritos([...favoritos, jogoSelecionado]);
  };
  const removerDosFavoritos = (indice) => {
    const copiaLista = [...favoritos];
    copiaLista.splice(indice, 1);
    setFavoritos(copiaLista);
  };

  return (
    <section class="container_formulario">
      <div class="div_formulario">
        <Campo
          type="text"
          placeholder="Digite o nome"
          value={nome}
          onChange={(e) => set_nome(e.target.value)}
        />
        <Campo
          type="text"
          placeholder="Digite a descrição"
          value={descricao}
          onChange={(e) => set_descricao(e.target.value)}
        />
        <Campo
          type="text"
          placeholder="Digite o link do jogo"
          value={link}
          onChange={(e) => set_link(e.target.value)}
        />
        {/* Passamos a função salvarURL para o Filho */}
        <Imagem acessaURL={salvarURL} />
        <button id="button" onClick={() => novoJogo()}>
          Criar jogo
        </button>
        {/* Mostrar a lista de jogos */}
        <div>
          {jogos.map((elemento, indice) => (
            <Jogo
              jogo={elemento}
              indice={indice}
              seFavorito={false}
              removerJogo={removerJogo}
              adicionarAosFavoritos={adicionarAosFavoritos}
              removerDosFavoritos={removerDosFavoritos}
            ></Jogo>
          ))}
        </div>
        {/* Mostrar a lista de favoritos */}
        <div>
          {favoritos.map((elemento, indice) => (
            <Jogo
              jogo={elemento}
              indice={indice}
              seFavorito={true}
              removerJogo={removerJogo}
              adicionarAosFavoritos={adicionarAosFavoritos}
              removerDosFavoritos={removerDosFavoritos}
            ></Jogo>
          ))}
        </div>
      </div>
    </section>
  );
}
