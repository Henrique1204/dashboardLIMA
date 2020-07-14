function criaGrafico(idGrafico, dados, cor, bcor){
    var ctx = document.getElementById(idGrafico).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: dados["RótuloX"],
            datasets: [{
                label: dados["indicador"],
                backgroundColor: cor,
                borderColor: bcor,
                data: dados["dados"]
            }]
        },
    
        // Configuration options go here
        options: {}
       });
    }
    
    var dadosGrafico1 = {
        "indicador": "Temperatura em SP °C",
        "RótuloX": ['11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50'],
        "dados": [22, 24, 24, 26, 28, 30, 32]
    }

    criaGrafico("grafico-1", dadosGrafico1, 'rgb(255, 132, 84)', 'rgb(255, 189, 156)')

    var dadosGrafico2 = {
        "indicador": "Temperatura em RJ °C",
        "RótuloX": ['11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50'],
        "dados": [36, 38, 40, 38, 38, 42, 44]
    }

    criaGrafico("grafico-2", dadosGrafico2, 'rgb(247, 104, 121)', 'rgb(255, 156, 156)')

    var dadosGrafico3 = {
         "indicador": "Temperatura em SC °C",
         "RótuloX": ['11:50', '12:00', '12:10', '12:20', '12:30', '12:40', '12:50'],
         "dados": [8, 10, 12, 14, 16, 16, 18]
    }

    criaGrafico("grafico-3", dadosGrafico3, 'rgb(89, 117, 255)', 'rgb(156, 176, 255)')

    function convert(dadosGrafico1, dados, F){
          var F = "dados" * (9 / 5) + 32;
          convert("grafico-1", dadosGrafico1, dados, F)
    }