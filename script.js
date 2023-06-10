function contarPalavras(texto) {
    return texto.trim().split(' ').length
}

function contarCaracteres(texto) {
    return texto.replaceAll(' ', '').length
}

function onClickAnalisar() {
    const texto = document.querySelector('#texto').value
    const qtdPalavras = contarPalavras(texto)
    const qtdCaracteres = contarCaracteres(texto)
    const resultado =  document.querySelector('#resultado')
    resultado.innerHTML = `<b>Resultado: </b> ${qtdPalavras} Palavras, ${qtdCaracteres} Caracteres`
    return
}