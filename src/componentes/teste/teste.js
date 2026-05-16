function Jogo(props) {
  return (
    <div className="div_jogo">
      <p> {props.nome} </p>
      <p> {props.descricao} </p>
      <p> {props.link} </p>
        <button>
          Favoritar
        </button>
    </div>
  );
}

export default Jogo;

/* Esse meu código diz: eu estou exportando a função
E sempre qe meu código chamar essa função jogo, eu vou exibir o meu nome e a minha descrição
Isso é o que chamamos de props, ou seja, é o que me permite passar valores para o meu componentes

Pode parecer estranho agora, mas é essencial para que a gente consiga conectar nossos elementos lego!

*/
