function pesquisar() {
    // Função para pesquisar e exibir os resultados
  
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado, digite algo no campo de busca.</p>";
      
        // Esconde a mensagem após 3 segundos
        setTimeout(() => {
          section.innerHTML = "";
        }, 3000); // 3000 milissegundos = 3 segundos
        return;
      }

    // Deixa as letras no campo de busca minusculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado e adiciona o HTML correspondente à string de resultados
    for (let dado of dados) {
        // Converte as propriedades para minúsculas para comparação
        let nome = dado.nome.toLowerCase();
        let artista = dado.artista.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tag = dado.tag.toLowerCase();
        let localizacao = dado.localizacao.toLowerCase();
        let estilo = dado.estilo.toLowerCase();
        
        // Verifica se o campoPesquisa está presente em qualquer uma das propriedades
        if (nome.includes(campoPesquisa) || artista.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa) || localizacao.includes(campoPesquisa) || estilo.includes(campoPesquisa)) {
            // Cria um novo elemento div para cada dado
            resultados += `
    <div class="item-resultado">
        <h2 class="nome">${dado.nome}</h2>
        <p class="descricao-meta"><strong>Artista:</strong> ${dado.artista}</p>
        <p class="descricao-meta"><strong>Descrição:</strong> ${dado.descricao}</p>
        <p class="descricao-meta"><strong>Tags:</strong> ${dado.tag}</p>
        <p class="descricao-meta"><strong>Localização:</strong> ${dado.localizacao}</p>
        <p class="descricao-meta"><strong>Estilo:</strong> ${dado.estilo}</p>
        <p class="descricao-meta"><strong>Site:</strong> <a>${dado.link.site}</a></p>
        <img src="${dado.imagem}" alt="${dado.nome}" class="imagem-resultado">
        <a href="${dado.link.wikipedia}" target="_blank">Saiba +</a>
    </div>
`;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
      
        // Esconde a mensagem após 3 segundos
        setTimeout(() => {
          resultados = "";
        }, 3000); // 3000 milissegundos = 3 segundos
      }
  
    // Atribui a string de resultados ao innerHTML da seção
    section.innerHTML = resultados;
}
