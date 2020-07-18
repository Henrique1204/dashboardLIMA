let climaBR = [
    // Norte
    // 06:00
    {"estado": "AM", "data": "06:00", "temperatura": 26},
    {"estado": "AC", "data": "06:00", "temperatura": 24},
    {"estado": "RO", "data": "06:00", "temperatura": 27},
    {"estado": "PA", "data": "06:00", "temperatura": 22},
    {"estado": "RR", "data": "06:00", "temperatura": 22},
    {"estado": "AP", "data": "06:00", "temperatura": 27},
    {"estado": "TO", "data": "06:00", "temperatura": 23},
    // 12:00
    {"estado": "AM", "data": "12:00", "temperatura": 34},
    {"estado": "AC", "data": "12:00", "temperatura": 39},
    {"estado": "RO", "data": "12:00", "temperatura": 33},
    {"estado": "PA", "data": "12:00", "temperatura": 36},
    {"estado": "RR", "data": "12:00", "temperatura": 38},
    {"estado": "AP", "data": "12:00", "temperatura": 40},
    {"estado": "TO", "data": "12:00", "temperatura": 42},
    // 18:00
    {"estado": "AM", "data": "18:00", "temperatura": 32},
    {"estado": "AC", "data": "18:00", "temperatura": 37},
    {"estado": "RO", "data": "18:00", "temperatura": 40},
    {"estado": "PA", "data": "18:00", "temperatura": 39},
    {"estado": "RR", "data": "18:00", "temperatura": 29},
    {"estado": "AP", "data": "18:00", "temperatura": 31},
    {"estado": "TO", "data": "18:00", "temperatura": 30},
    // 00:00
    {"estado": "AM", "data": "00:00", "temperatura": 25},
    {"estado": "AC", "data": "00:00", "temperatura": 21},
    {"estado": "RO", "data": "00:00", "temperatura": 32},
    {"estado": "PA", "data": "00:00", "temperatura": 29},
    {"estado": "RR", "data": "00:00", "temperatura": 30},
    {"estado": "AP", "data": "00:00", "temperatura": 27},
    {"estado": "TO", "data": "00:00", "temperatura": 35},
    // Nordeste
    // 06:00
    {"estado": "MA", "data": "06:00", "temperatura": 48},
    {"estado": "PI", "data": "06:00", "temperatura": 45},
    {"estado": "CE", "data": "06:00", "temperatura": 43},
    {"estado": "BA", "data": "06:00", "temperatura": 50},
    {"estado": "PE", "data": "06:00", "temperatura": 20},
    {"estado": "RN", "data": "06:00", "temperatura": 47},
    {"estado": "PB", "data": "06:00", "temperatura": 30},
    {"estado": "AL", "data": "06:00", "temperatura": 26},
    {"estado": "SE", "data": "06:00", "temperatura": 33},
    // 12:00
    {"estado": "MA", "data": "12:00", "temperatura": 20},
    {"estado": "PI", "data": "12:00", "temperatura": 45},
    {"estado": "CE", "data": "12:00", "temperatura": 43},
    {"estado": "BA", "data": "12:00", "temperatura": 50},
    {"estado": "PE", "data": "12:00", "temperatura": 20},
    {"estado": "RN", "data": "12:00", "temperatura": 47},
    {"estado": "PB", "data": "12:00", "temperatura": 30},
    {"estado": "AL", "data": "12:00", "temperatura": 26},
    {"estado": "SE", "data": "12:00", "temperatura": 33},
    // 18:00
    {"estado": "MA", "data": "18:00", "temperatura": 48},
    {"estado": "PI", "data": "18:00", "temperatura": 45},
    {"estado": "CE", "data": "18:00", "temperatura": 43},
    {"estado": "BA", "data": "18:00", "temperatura": 50},
    {"estado": "PE", "data": "18:00", "temperatura": 20},
    {"estado": "RN", "data": "18:00", "temperatura": 47},
    {"estado": "PB", "data": "18:00", "temperatura": 30},
    {"estado": "AL", "data": "18:00", "temperatura": 26},
    {"estado": "SE", "data": "18:00", "temperatura": 33},
    // 00:00
    {"estado": "MA", "data": "00:00", "temperatura": 48},
    {"estado": "PI", "data": "00:00", "temperatura": 45},
    {"estado": "CE", "data": "00:00", "temperatura": 43},
    {"estado": "BA", "data": "00:00", "temperatura": 50},
    {"estado": "PE", "data": "00:00", "temperatura": 20},
    {"estado": "RN", "data": "00:00", "temperatura": 47},
    {"estado": "PB", "data": "00:00", "temperatura": 30},
    {"estado": "AL", "data": "00:00", "temperatura": 26},
    {"estado": "SE", "data": "00:00", "temperatura": 33},
    // Centro-Oeste
    // 06:00
    {"estado": "GO", "data": "06:00", "temperatura": 20},
    {"estado": "DF", "data": "06:00", "temperatura": 23},
    {"estado": "MT", "data": "06:00", "temperatura": 22},
    {"estado": "MS", "data": "06:00", "temperatura": 24},
    // 12:00
    {"estado": "GO", "data": "12:00", "temperatura": 35},
    {"estado": "DF", "data": "12:00", "temperatura": 26},
    {"estado": "MT", "data": "12:00", "temperatura": 33},
    {"estado": "MS", "data": "12:00", "temperatura": 32},
    // 18:00
    {"estado": "GO", "data": "18:00", "temperatura": 19},
    {"estado": "DF", "data": "18:00", "temperatura": 17},
    {"estado": "MT", "data": "18:00", "temperatura": 24},
    {"estado": "MS", "data": "18:00", "temperatura" :26},
    // 00:00
    {"estado": "GO", "data": "00:00", "temperatura": 19},
    {"estado": "DF", "data": "00:00", "temperatura": 25},
    {"estado": "MT", "data": "00:00", "temperatura": 21},
    {"estado": "MS", "data": "00:00", "temperatura": 23}
];

// Função que formata os dados gerados pelo arduíno, recebe um Array com os indentifacadores para ser usados nos dados (id) e um Array com os dados para serem formatados (dados).
function formatarDados(id, dados) {
    // (let dadosFormatados) -- Os dados formatados serão guardados aqui dentro.
    let dadosFormatados = [];

    // Laço que percorre a lista de indentifadores
    for(let i = 0; i < id.length; i++) {
        // (let dadosFiltrados) -- Recebe um Array com os valores que correspondem ao filtro, caso não exista elementos que correspondam ao filtro ele retorna um Array vazio.
        // Os elementos estão sendo filtrados pelo indentifacador (id), para isso ele compara o estado que está sendo passado no dado.
        let dadosFiltrados = dados.filter(dado => { return dado.estado == id[i] });

        // Condição para conferir se o filtro encontrou algum dado, caso tenha encontrado ele gera o dado formatado, caso contrário não faz nada.
        if (dadosFiltrados.length != 0) {        
            // (let formato) -- É o molde da estrutura na qual a gente vai usar na versão final dos dados.
            let formato = {id: id[i], data: [], temperatura: []};

            // Laço para adicionar os valores dentro da estrutura
            for (let i = 0; i < dadosFiltrados.length; i++) {
                // Adiciona os valores das datas para dentro da estrutura.    
                formato.data.push(dadosFiltrados[i].data);
                // Adiciona os valores das temperaturas para dentro da estrutra.
                formato.temperatura.push(dadosFiltrados[i].temperatura);
            }

            // Adiciona o dado formatado dentro do Array dos dados formatados
            dadosFormatados.push(formato);
        }
    }

    // Retorna o Array com os dados formatados
    return dadosFormatados;
}