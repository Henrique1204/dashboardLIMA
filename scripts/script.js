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
    // (let cores) -- Lista de cores para ser usado no gráfico do tipo "polarArea".
    let cores = ["rgba(34, 102, 255, 0.4)", "rgba(255, 34, 102, 0.4)", "rgba(34, 255, 192, 0.4)", "rgba(255, 34,255, 0.4)"];
    // (let cor) -- Confere o tipo do gráfico, caso seja do tipo "polarArea" atribui uma lista de cores, caso não seja pega o valor da propriedade "color" do elemento pai do canvas, a propriedade "color" foi definida no css.
    let cor = (tipo == "polarArea") ? cores : document.defaultView.getComputedStyle(item.parentNode,null).color;
    
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

// Função que gera o gráfico, recebe como parâmetro o elemento onde será criado o gráfico, o tipo de gráfico, os dados que irão ser usados no gráfico e cor dos dados.
function gerarGrafico(canvas, tipo , dados, cor) {
  Chart.defaults.global.defaultFontColor = "#FFF";

  let ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: tipo,
    
    data: {
      labels: dados["data"],
      datasets: [
        {
          label: "Graus °C",
          backgroundColor: cor,
          borderColor: "rgba(255, 255, 255, 0.5)",
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
            }
          }
        ]
      }
    }
  });
}