function clicar() {
    let num = document.getElementById('num')
    var box = document.getElementById('box')
    if (num.value.length == 0) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    num = Number(num.value)
    var mostra = ' '
    var cont = 0
    while (cont < 10) {
        cont++
        mostra += `${num} x ${cont} = ${num * cont}<br>`
    }
    box.innerHTML = mostra
}