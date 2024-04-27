// Objeto que armazena as listas de compras por categoria
const listaDeCompras = {
  Frutas: [],
  Laticínios: [],
  Congelados: [],
  Doces: [],
  Outros: [],
};

// Função para exibir a lista de compras
function mostrarLista() {
  let resultado = "Lista de compras:\n";
  // Itera sobre cada categoria no objeto listaDeCompras
  for (const categoria in listaDeCompras) {
    // Verifica se a categoria possui itens
    if (listaDeCompras[categoria].length > 0) {
      // Adiciona a categoria e seus itens à string de resultado
      resultado += ` ${categoria}: ${listaDeCompras[categoria].join(", ")}\n`;
    }
  }
  return resultado;
}

// Função para adicionar itens à lista de compras
function adicionar() {
  while (true) {
    // Solicita ao usuário o item a ser adicionado e sua categoria
    const item = prompt("Qual item deseja adicionar?");
    let categoria = prompt(
      "Em qual categoria esse item se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros)"
    );

    // Converter a primeira letra da categoria para maiúscula e o restante para minúscula
    categoria =
      categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

    // Verifica se a categoria é válida e adiciona o item à lista correspondente
    if (listaDeCompras[categoria] !== undefined) {
      listaDeCompras[categoria].push(item);
    } else {
      // Caso a categoria seja desconhecida, adiciona o item à categoria "Outros"
      alert("Categoria desconhecida. Adicionando à categoria 'Outros'.");
      listaDeCompras["Outros"].push(item);
    }

    // Pergunta ao usuário se deseja adicionar mais um item à lista
    let adicionar;
    while (true) {
      adicionar = prompt(
        "Deseja adicionar mais um item à lista de compras? (Sim/Não)"
      ).toLowerCase();

      if (adicionar === "sim" || adicionar === "não" || adicionar === "nao") {
        break;
      } else {
        alert("Resposta inválida. Por favor, responda 'sim' ou 'não'.");
      }
    }

    // Sai do loop se o usuário não quiser adicionar mais itens
    if (adicionar === "não" || adicionar === "nao") {
      break;
    }
  }
}

// Função para deletar itens da lista de compras
function deletar() {
  while (true) {
    // Verifica se a lista de compras está vazia
    let listaVazia = true;
    for (const categoria in listaDeCompras) {
      if (listaDeCompras[categoria].length > 0) {
        listaVazia = false;
        break;
      }
    }

    // Exibe mensagem de alerta se a lista estiver vazia e sai do loop
    if (listaVazia) {
      alert("Não há nenhum item na lista.");
      break;
    } else {
      // Solicita ao usuário o item a ser deletado
      const itemParaDeletar = prompt(
        `${mostrarLista()}\nDeseja deletar qual item?`
      );

      // Converte o item a ser deletado para minúsculas
      const itemParaDeletarLower = itemParaDeletar.toLowerCase();

      // Itera sobre as categorias para encontrar e deletar o item
      for (const categoria in listaDeCompras) {
        for (let i = 0; i < listaDeCompras[categoria].length; i++) {
          // Converte o item na lista para minúsculas
          const listItemLower = listaDeCompras[categoria][i].toLowerCase();

          // Compara os itens em minúsculas
          if (listItemLower === itemParaDeletarLower) {
            listaDeCompras[categoria].splice(i, 1);
            i--; // Atualiza o índice após a remoção do item
          }
        }
      }
    }

    // Pergunta ao usuário se deseja deletar mais um item
    let continuar;
    while (true) {
      continuar = prompt(
        "Deseja deletar mais um item à lista de compras? (Sim/Não)"
      ).toLowerCase();

      if (continuar === "sim" || continuar === "não" || continuar === "nao") {
        break;
      } else {
        alert("Resposta inválida. Por favor, responda 'sim' ou 'não'.");
      }
    }

    // Sai do loop se o usuário não quiser deletar mais itens
    if (continuar === "não" || continuar === "nao") {
      break;
    }
  }
}

// Loop principal para adicionar ou deletar itens até que o usuário decida parar
while (true) {
  // Pergunta ao usuário se deseja adicionar ou deletar itens
  const addOrDelete = prompt(
    `${mostrarLista()}\nQuer adicionar ou deletar algum item? (Adicionar/Deletar)`
  );

  // Chama a função correspondente com base na escolha do usuário
  if (addOrDelete.toLowerCase() === "adicionar") {
    adicionar();
  } else if (addOrDelete.toLowerCase() === "deletar") {
    deletar();
  } else {
    // Exibe mensagem de alerta se a opção for inválida
    alert("Resposta inválida. Por favor, responda 'Adicionar' ou 'Deletar'.");
  }

  // Pergunta ao usuário se deseja continuar adicionando ou deletando itens
  const continuar = prompt("Deseja continuar? (Sim/Não)").toLowerCase();
  if (continuar === "não" || continuar === "nao") {
    break;
  }
}

// Exibe a lista de compras final
alert(mostrarLista());
