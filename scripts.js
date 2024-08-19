const key = "8fa17cef7d7f7e31dc9b09b7e8749d1a"

function colocarDadosNaTela(dados) {
    console.log(dados)

    document.querySelector(".city").innerHTML = `Tempo em ${dados.name}`
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".text-preview").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = dados.main.humidity +"%"
    document.querySelector(".img-preview").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`
        https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    ).then(resposta => resposta.json())
 
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value
    
    buscarCidade(cidade)
}