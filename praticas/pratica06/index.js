const readline = require("readline-sync");
const controlador = require("./controlador");

function menu() {
    console.log("1 - Adicionar contato");
    console.log("2 - Buscar contato");
    console.log("3 - Atualizar contato");
    console.log("4 - Remover contato");
    console.log("5 - Sair");
}

async function escolherOpcao(opcao) {
  switch (parseInt(opcao)) {
    case 1: {
      const nome = readline.question("Informe o nome da tarefa: ");
      await controlador.adicionarTarefa(nome);
      break;
    }
    case 2: {
      const nome = readline.question("Informe o nome da tarefa: ");
      const resultado = await controlador.buscarTarefa(nome);
      console.log(resultado);
      break;
    }
    case 3: {
      const nome = readline.question("Informe o nome da tarefa: ");
      await controlador.atualizarTarefa(nome);
      break;
    }
    case 4: {
      const nome = readline.question("Informe o nome da tarefa: ");
      await controlador.removerTarefa(nome);
      break;
    }
    case 5: {
      process.exit(0);
    }
  }
}

async function main() {
    while(true){
        menu();
        const opcao = readline.question("Escolha uma opcao: ");

        await escolherOpcao(opcao);
    }
}

main();