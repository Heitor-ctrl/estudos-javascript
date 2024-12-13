var conta = document.getElementById('conta');
conta.addEventListener('click', clickar);
var escre = document.getElementById('cont');
function clickar() {
    var num = document.getElementById('pri');
    num = Number(num.value)
    var ate = document.getElementById('seg');
    ate = Number(ate.value)
    var pula = document.getElementById('ter');
    pula = Number(pula.value)
    var output = ' '
    if (num == 0 || ate == 0 || pula == 0) {
        window.alert('[ERRO] Não foi possível fazer a contagem. Verifique os dados e tente novamente!')
    } else {
        for (num; num <= ate; num+=pula) {
            output += num + ' =>';
        };
        if (output.endsWith(' =>')) {
            output = output.slice(0,-2)
        };
    };
    
    escre.textContent = output
}