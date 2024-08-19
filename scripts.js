const key = "8fa17cef7d7f7e31dc9b09b7e8749d1a"


async function buscarCidade(cidade) {
    const dados = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`
    ).then(resposta => resposta.json())
    
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value
    
    buscarCidade(cidade)
}