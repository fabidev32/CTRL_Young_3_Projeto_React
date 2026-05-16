import { useState } from "react";
import "./teste.css";

export default function CadastrarJogo() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [link, setLink] = useState("");
  const [listaJogos, setListaJogos] = useState([]);

  const NovoJogo = () => {
    const novoJogo = { nome, descricao, link };
    setListaJogos([...listaJogos, novoJogo]);
  };

  return (
    <div class="formulario">
      <div class="itens_formulario">
        <div>
          <p> Cadastre seu jogo! </p>
          <input
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite a descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite o link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button onClick={() => NovoJogo()}>Adicionar novo item</button>
        </div>

        <div class="div_lista_jogos">
          {listaJogos.map((jogo, posicao_array) => (
            <div key={posicao_array}>
              <h3>{jogo.nome}</h3>
              <p>{jogo.descricao}</p>
              <a href={jogo.link} target="_blank">
                Acessar jogo
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
