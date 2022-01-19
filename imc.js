const res = document.querySelector('.resultado')
const calc = document.querySelector('#calc')

calc.onclick = calcular

function pesoIdeal(alturaAtual) {
    let ind = 0
    let pesos = []
    for (let pesoAtual = 0; ind <= 24.9; pesoAtual += 0.1) {
        ind = pesoAtual / (alturaAtual * alturaAtual)
        if (ind >= 18.5)
            pesos.push(pesoAtual.toFixed(1))
    }

    return `${pesos[0]} e ${pesos[pesos.length - 2]}`
}

function calcular() {
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value * 0.01
    const imc = peso / (altura * altura)

    if (peso == '' || altura == '') {
        window.alert('[ERRO] Insira todos os dados corretamente.')
    } else {
        if (imc < 18.5) {
            res.classList.remove('normal')
            res.classList.add('atencao')
            res.innerHTML = `De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura. Para atingir um valor de IMC normal, seu peso deve estar entre ${pesoIdeal(altura)} kg.`
        } else if (imc >= 18.5 && imc <= 24.9) {
            res.classList.remove('atencao')
            res.classList.add('normal')
            res.innerHTML = `De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura. Para manter o valor de IMC normal, seu peso pode variar entre ${pesoIdeal(altura)} kg.`
        } else if (imc > 24.9) {
            res.classList.remove('normal')
            res.classList.add('atencao')
            res.innerHTML = `De acordo com a Organização Mundial da Saúde, seu IMC está acima do recomendado para a sua altura. Para atingir um valor de IMC normal, seu peso deve estar entre ${pesoIdeal(altura)} kg.`
        }
    }
}
