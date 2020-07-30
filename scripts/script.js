// (const canvas) -- Pega os Elementos HTML que tem o atributo data-tipoGrafico, ele retorna os elementos em forma de Array.
const canvas = document.querySelectorAll("[data-tipoGrafico]");

// (const sigla) -- Guarda os indentifacadores dos gráficos, usaremos isso como filtro nos dados para saber qual gráfico recebe qual dado.
const sigla = Array.from(canvas).map(item => item.id);

// (const dados) -- Dados recebe o dados formatados no formato que iremos usar na geração dos gráficos.
const dados = formatarDados(sigla, climaBR);

// laço forEach que vai percorrer os elementos HTML que foram guardados na variável (const canvas), cada item dentro do Array é representado pelo parâmetro (item).
canvas.forEach((item) => {
  // (let tipo) -- Pega o valor que está sendo passado no atributo "data-tipoGrafico", o valor está sendo passado no HTML.
  let tipo = item.getAttribute("data-tipoGrafico");
  
  // (let idCanvas) -- Pega o valor que está sendo passado no atributo "id", o valor está sendo passado no HTML.
  let idCanvas = item.id;
  
  // Condição para conferir se existe algum dado que seja correspondente ao gráfoc, caso exista ele cria o gráfico, caso não exista ele esconde o elemento da tela.
  if (dados.some(dado => dado.id == idCanvas)) {
    let dadoCanvas = dados.find(dado => dado.id == idCanvas);
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

// Função que gera o gráfico, recebe como parâmetro o elemento onde será criado o gráfico, o tipo de gráfico, os dados que irão ser usados no gráfico e cor dos dados.
function gerarGrafico(canvas, tipo , dados, cor) {
  Chart.defaults.global.defaultFontColor = "#FFF";
  
  let ctx = canvas.getContext("2d");

  // (let opcoes) -- Operador ternário pra definir as opções do gráfico de acordo com o tipo dele.
  let opcoes = (tipo == "polarArea") ? {} : (tipo == "horizontalBar") ? { scales: { xAxes: [{ ticks: { min: 0, max: 50 }}]}} : { scales: { yAxes: [{ ticks: { min: 0, max: 50 }}]}};

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
    
    options: opcoes
  });
}