import "./card_jogo.css";

export default function Jogo({
  jogo,
  indice,
  removerJogo,
  seFavorito,
  adicionarAosFavoritos,
  removerDosFavoritos,
}) {
  return (
    <div className="div_jogo">
      <p> {jogo.nome} </p>
      <p> {jogo.descricao} </p>
      <p> {jogo.link} </p>
      <img
        id="imagem_card"
        src={jogo.urlImagem}
        alt="Imagem do meu card de jogo"
      />
      <button onClick={() => removerJogo(indice)}></button>
      {seFavorito ? (
        <button onClick={() => removerDosFavoritos(indice)}>
          Remover dos Favoritos
        </button>
      ) : (
        <button onClick={() => adicionarAosFavoritos(indice)}>
          Favoritar
        </button>
      )}
    </div>
  );
}

/* Esse meu código diz: eu estou exportando a função
E sempre qe meu código chamar essa função jogo, eu vou exibir o meu nome e a minha descrição
Isso é o que chamamos de props, ou seja, é o que me permite passar valores para o meu componentes

Pode parecer estranho agora, mas é essencial para que a gente consiga conectar nossos elementos lego!

*/
