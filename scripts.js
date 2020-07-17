// Dados
var climaBR = [
  //Norte, 06:00
  {
    "estado": "AM",
    "horario": "06:00",
    "temperatura": 26
  }, {
    "estado": "AC",
    "horario": "06:00",
    "temperatura": 24
  }, {
    "estado": "RO",
    "horario": "06:00",
    "temperatura": 27
  }, {
    "estado": "PA",
    "horario": "06:00",
    "temperatura": 22
  }, {
    "estado": "RR",
    "horario": "06:00",
    "temperatura": 22
  }, {
    "estado": "AP",
    "horario": "06:00",
    "temperatura": 27
  }, {
    "estado": "TO",
    "horario": "06:00",
    "temperatura": 23
  },
  //12:00
  {
    "estado": "AM",
    "horario": "12:00",
    "temperatura": 34
  }, {
    "estado": "AC",
    "horario": "12:00",
    "temperatura": 39
  }, {
    "estado": "RO",
    "horario": "12:00",
    "temperatura": 33
  }, {
    "estado": "PA",
    "horario": "12:00",
    "temperatura": 36
  }, {
    "estado": "RR",
    "horario": "12:00",
    "temperatura": 38
  }, {
    "estado": "AP",
    "horario": "12:00",
    "temperatura": 40
  }, {
    "estado": "TO",
    "horario": "12:00",
    "temperatura": 42
  },
  // 18:00
  {
    "estado": "AM",
    "horario": "18:00",
    "temperatura": 32
  }, {
    "estado": "AC",
    "horario": "18:00",
    "temperatura": 37
  }, {
    "estado": "RO",
    "horario": "18:00",
    "temperatura": 40
  }, {
    "estado": "PA",
    "horario": "18:00",
    "temperatura": 39
  }, {
    "estado": "RR",
    "horario": "18:00",
    "temperatura": 29
  }, {
    "estado": "AP",
    "horario": "18:00",
    "temperatura": 31
  }, {
    "estado": "TO",
    "horario": "18:00",
    "temperatura": 30
  },
  //00:00
  {
    "estado": "AM",
    "horario": "00:00",
    "temperatura": 25
  }, {
    "estado": "AC",
    "horario": "00:00",
    "temperatura": 21
  }, {
    "estado": "RO",
    "horario": "00:00",
    "temperatura": 32
  }, {
    "estado": "PA",
    "horario": "00:00",
    "temperatura": 29
  }, {
    "estado": "RR",
    "horario": "00:00",
    "temperatura": 30
  }, {
    "estado": "AP",
    "horario": "00:00",
    "temperatura": 27
  }, {
    "estado": "TO",
    "horario": "00:00",
    "temperatura": 35
  },
  {
  "estado": "MA",
  "horario": "06:00",
  "temperatura": 48
}, {
  "estado": "PI",
  "horario": "06:00",
  "temperatura": 45
}, {
  "estado": "CE",
  "horario": "06:00",
  "temperatura": 43
}, {
  "estado": "BA",
  "horario": "06:00",
  "temperatura": 50
}, {
  "estado": "PE",
  "horario": "06:00",
  "temperatura": 20
}, {
  "estado": "RN",
  "horario": "06:00",
  "temperatura": 47
}, {
  "estado": "PB",
  "horario": "06:00",
  "temperatura": 30
}, {
  "estado": "AL",
  "horario": "06:00",
  "temperatura": 26
}, {
  "estado": "SE",
  "horario": "06:00",
  "temperatura": 33
},
{
  "estado": "MA",
  "horario": "12:00",
  "temperatura": 20
}, {
  "estado": "PI",
  "horario": "12:00",
  "temperatura": 45
}, {
  "estado": "CE",
  "horario": "12:00",
  "temperatura": 43
}, {
  "estado": "BA",
  "horario": "12:00",
  "temperatura": 50
}, {
  "estado": "PE",
  "horario": "12:00",
  "temperatura": 20
}, {
  "estado": "RN",
  "horario": "12:00",
  "temperatura": 47
}, {
  "estado": "PB",
  "horario": "12:00",
  "temperatura": 30
}, {
  "estado": "AL",
  "horario": "12:00",
  "temperatura": 26
}, {
  "estado": "SE",
  "horario": "12:00",
  "temperatura": 33
},
{
  "estado": "MA",
  "horario": "18:00",
  "temperatura": 48
}, {
  "estado": "PI",
  "horario": "18:00",
  "temperatura": 45
}, {
  "estado": "CE",
  "horario": "18:00",
  "temperatura": 43
}, {
  "estado": "BA",
  "horario": "18:00",
  "temperatura": 50
}, {
  "estado": "PE",
  "horario": "18:00",
  "temperatura": 20
}, {
  "estado": "RN",
  "horario": "18:00",
  "temperatura": 47
}, {
  "estado": "PB",
  "horario": "18:00",
  "temperatura": 30
}, {
  "estado": "AL",
  "horario": "18:00",
  "temperatura": 26
}, {
  "estado": "SE",
  "horario": "18:00",
  "temperatura": 33
},
{
  "estado": "MA",
  "horario": "00:00",
  "temperatura": 48
}, {
  "estado": "PI",
  "horario": "00:00",
  "temperatura": 45
}, {
  "estado": "CE",
  "horario": "00:00",
  "temperatura": 43
}, {
  "estado": "BA",
  "horario": "00:00",
  "temperatura": 50
}, {
  "estado": "PE",
  "horario": "00:00",
  "temperatura": 20
}, {
  "estado": "RN",
  "horario": "00:00",
  "temperatura": 47
}, {
  "estado": "PB",
  "horario": "00:00",
  "temperatura": 30
}, {
  "estado": "AL",
  "horario": "00:00",
  "temperatura": 26
}, {
  "estado": "SE",
  "horario": "00:00",
  "temperatura": 33
}];
var sigla = [ "AM", "AC", "RO", "PA", "RR", "AP", "TO", "MA","SE","BA","AL", "PE", "PI", "PB", "CE", "RN"];
var dadosformatados = gerarDados(sigla, climaBR);

// Canvas
const canvas = document.querySelectorAll("[data-tipoGrafico]");

canvas.forEach((item) => {
  let tipo = item.getAttribute("data-tipoGrafico");
  
  let idCanvas = item.getAttribute("id");
  let dadoCanvas = dadosformatados.find(elemento => elemento.id == idCanvas);

  let cor = definirCor(idCanvas);
  
  gerarGrafico(item, tipo, dadoCanvas, cor);
});

function definirCor(siglas){
  switch (siglas) {
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
    case"GO":
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

function gerarDados(id, dados) {
  var dadosfinais = [] 
  for(let i = 0; i < id.length; i++) {
    var dadosfiltrados = dados.filter(dado => { return dado.estado == id[i] });
    var estrutura = {id: id[i], horario: [], temperatura: []};
    
    for (let i = 0; i < dadosfiltrados.length; i++) {        
      estrutura.horario.push(dadosfiltrados[i].horario);
      estrutura.temperatura.push(dadosfiltrados[i].temperatura);
    }
    
    dadosfinais.push(estrutura);
  }
  
  return dadosfinais;
}



function gerarGrafico(canvas, tipo , dados, cor) {
  Chart.defaults.global.defaultFontColor = 'white';
  let ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: tipo,
    
    data: {
      labels: dados["horario"],
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
          },
        ],
      },
    },
  });
}
