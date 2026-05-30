import "./adicionar_imagem.css";

export default function Adicionar_Imagem({ acessaURL }) {
  
  const pegarImagem = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      // Cria a URL temporária
      const fileUrl = URL.createObjectURL(file);
      // Envia para o componente Pai através da prop acessaURL
      acessaURL(fileUrl);
    }
  };

  return (
    <div className="div_imagem">
      <div>
        <label for="input_com_imagem">Selecione uma imagem </label>
        <input 
          type="file" 
          id="input_com_imagem" 
          onChange={pegarImagem} // O gatilho é aqui!
        />
      </div>
    </div>
  );
}