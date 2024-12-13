var aux = document.getElementById("add")
aux.addEventListener('click', clicou)
var lista = []
var soma = 0
function clicou() {
    var num = Number(document.getElementById('num').value)
    var barra = document.getElementById('barra')
    var opc = document.createElement('option')
    if (num > 100 || num <= 0) {
        alert('O número deve estar entre 1 e 100, tente novamente!')
    } else if (lista.includes(num)) {
        barra.appendChild(opc)
        opc.text = `Número ${num} já foi cadastrado.`
    } else {
        lista.push(num)
        soma += num
        barra.appendChild(opc)
        opc.text = `Número ${num} cadastrado com sucesso.`    
    }
    num.value = ''
    num.focus()
}
var resp = document.getElementById('resp')
var final = document.getElementById('final').addEventListener('click', fim)
function fim() {
    if (lista.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        resp.innerHTML = ''
        resp.innerHTML = `<p>Ao todo você digitou ${lista.length} números</p>
        <p>O maior valor é ${Math.max(...lista)}</p>
        <p>O menor valor é ${Math.min(...lista)}</p>
        <p>A soma de todos os valores é ${soma}</p>
        <p>A média dos valores digitados é ${soma/2}`
    }
}