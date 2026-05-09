import "./jogo.css"

export default function Jogo({jogo}) {
  return (
    <div className = "div_produto">
      <p> {jogo.nome} </p>
      <p> {jogo.descricao} </p>
    </div>
  );
}

/* Esse meu código diz: eu estou exportando a função
E sempre qe meu código chamar essa função jogo, eu vou exibir o meu nome e a minha descrição
Isso é o que chamamos de props, ou seja, é o que me permite passar valores para o meu componentes

Pode parecer estranho agora, mas é essencial para que a gente consiga conectar nossos elementos lego!

*/
