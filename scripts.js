// (const canvas) -- Pega os Elementos HTML que tem o atributo data-tipoGrafico, ele retorna os elementos em forma de Array.
const canvas = document.querySelectorAll("[data-tipoGrafico]");
// (const sigla) -- Guarda os indentifacadores dos gráficos, usaremos isso como filtro nos dados para saber qual gráfico recebe qual dado.
const sigla = obterIds(canvas);
// (const dados) -- Dados recebe o dados formatados no formato que iremos usar na geração dos gráficos.
const dados = formatarDados(sigla, climaBR);
// laço forEach que vai percorrer os elementos HTML que foram guardados na variável (const canvas), cada item dentro do Array é representado pelo parâmetro (item).
canvas.forEach((item) => {
  // (let tipo) -- Pega o valor que está sendo passado no atributo "data-tipoGrafico", o valor está sendo passado no HTML.
  let tipo = item.getAttribute("data-tipoGrafico");
  
  // (let idCanvas) -- Pega o valor que está sendo passado no atributo "id", o valor está sendo passado no HTML.
  let idCanvas = item.getAttribute("id");
  // (let dadoCanvas) -- Realiza uma busca dentro do Array dos dados, caso a comparação que está sendo passada como parâmetro seja verdadeira ele retorna o valor encontrado, caso seja falso ele retorna o valor "undefined", caso possua mais de um elemento que corresponda ao valor da comparação ele irá retornar o primeiro dos valores a ser encontrado.
  // A busca funciona como um tipo de laço que percorre todos os elementos do Array, o "elemento" se refere ao elemento onde o laço está, a comparação é feita pelo atributo "id" do elemento e é comparado com a variável (idCanvas).
  let dadoCanvas = dados.find(elemento => elemento.id == idCanvas);
  
  // Condição para conferir se existe algum dado que seja correspondente ao gráfoc, caso exista ele cria o gráfico, caso não exista ele esconde o elemento da tela.
  if (dadoCanvas != undefined) {
    // (let cor) -- Guarda um valor que será usado para definir a cor do gráfico, essa cor é definino na função "definirCor".
    let cor = definirCor(idCanvas);
    
    // Gera o gráfico
    gerarGrafico(item, tipo, dadoCanvas, cor);
  } else {
    // Esconde o elemento da tela
    item.parentNode.style.display = "none";
  }
});

// Função que retorna os indentifacodres dos gráficos, receb um Array com os elementos HTML no qual você obeter o indentifacador
function obterIds(elementos) {
  // (let ids) -- Os indentifacores serão guardados aqui dentro.
  let ids = [];
  
  // Laço que irá percorrer pelo Array de lementos passado
  for (let i = 0; i < elementos.length; i++) {
    // (let idCanvas) -- Pega o valor que está sendo passado no atributo "id", o valor está sendo passado no HTML.
    let id = elementos[i].getAttribute("id");
    // Adiciona o indentifacadores obtido dentro no Array de indentifacadores
    ids.push(id);
  }
  
  // retorna o Array ids
  return ids;
}

// Função que retorna um valor para ser usado como cor de acordo com a região do estado, recebe um estado para poder encontrar a região
function definirCor(estado) {
  // Condicional para definir as regiões e retornar a cor de acordo com o estado passado.
  switch (estado) {
    case "CE":
    case "RN":
    case "PB":
    case "SE":
    case "BA":
    case "PE":
    case "AL":
    case "PI":
    case "MA":       
    return "red";
    case "DF":
    case "MT":
    case "GO":
    case "MS":
    return "yellow";
    case "AM":
    case "AC":
    case "RO":
    case "PA":
    case "RR":
    case "AP":
    case "TO":
    return 'green';
    default:
    return "white";
  }
}

// Função que gera o gráfico, recebe como parâmetro o elemento onde será criado o gráfico, o tipo de gráfico, os dados que irão ser usados no gráfico e cor dos dados.
function gerarGrafico(canvas, tipo , dados, cor) {
  Chart.defaults.global.defaultFontColor = 'white';
  let ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: tipo,
    
    data: {
      labels: dados["data"],
      datasets: [
        {
          label: "Graus °C",
          backgroundColor: cor,
          borderColor: "gray",
          data: dados["temperatura"]
        }
      ]
    },
    
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 50,
            },
          }
        ]
      }
    }
  });
}