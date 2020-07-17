var climaBR = [{
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
    "temperatura": 48
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
  }, {
    "estado":"DF",
    "horario":"06:00",
    "temperatura":22
  }, {
    "estado":"GO",
    "horario":"06:00",
    "temperatura":33
  }, {
    "estado":"MT",
    "horario":"06:00",
    "temperatura":40
  }, {
    "estado":"MS",
    "horario":"06:00",
    "temperatura":25
  }, {
    "estado":"DF",
    "horario":"12:00",
    "temperatura":27
  }, {
    "estado":"GO",
    "horario":"12:00",
    "temperatura":25
  }, {
    "estado":"MT",
    "horario":"12:00",
    "temperatura":35
  }, {
    "estado":"MS",
    "horario":"12:00",
    "temperatura":23
  }, {
    "estado":"DF",
    "horario":"18:00",
    "temperatura": 24
  }, {
    "estado":"GO",
    "horario":"18:00",
    "temperatura":27
  }, {
    "estado":"MT",
    "horario":"18:00",
    "temperatura":32
  }, {
    "estado":"MS",
    "horario":"18:00",
    "temperatura":29

  }, {
    "estado":"DF",
    "horario":"00:00",
    "temperatura":19
  }, {
    "estado":"GO",
    "horario":"00:00",
    "temperatura":23
  }, {
    "estado":"MT",
    "horario":"00:00",
    "temperatura":25
  }, {
    "estado":"MS",
    "horario":"00:00",
    "temperatura":22

  }]

  var sigla = ["MA","SE","BA","AL", "PE", "PI", "PB", "CE", "RN", "DF","GO","MT","MS"];

  var dadosformatados = gerarDados(sigla, climaBR)

  console.log(dadosformatados)


  function gerarDados(id, dados){

    var dadosfinais = [] 
    for(let i = 0; i < id.length; i++)
    {
        var dadosfiltrados = dados.filter(dado => 
            {
                return dado.estado == id[i]
            }
            )



        var estrutura = {id: id[i], horario: [], temperatura: []}
        for (let i = 0; i < dadosfiltrados.length; i++) {
            
           estrutura.horario.push(dadosfiltrados[i].horario)
           estrutura.temperatura.push(dadosfiltrados[i].temperatura)
            
        }

        dadosfinais.push(estrutura)
    }

    return dadosfinais;
  }


const canvas = document.querySelectorAll("[data-tipoGrafico]");

function gerarGrafico(canvas, tipo ,dados) {
    let ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: tipo,
   
      data: {
        labels: dados["horario"],
        datasets: [
          {
            label: "clima",
            backgroundColor: "white",
            borderColor: "white",
            data: dados["temperatura"],
          },
        ],
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
   
  canvas.forEach((item) => {
      let tipo = item.getAttribute("data-tipoGrafico");
      console.log(tipo);
   
      gerarGrafico(item, tipo, dadosformatados[0]);
  });

  function definirCores(siglas){

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
        return "yellow"
        default:
            break;
    }
  }

