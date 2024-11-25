function exibir(){
    const galeria = document.querySelector("#galeria")
    //galeria.innerHTML= '<h1>Olá, amigos!</h1>'
    //galeria.innerHTML = '<img src="../img/1..jpg">'
    //const numero=Math.floor (Math.random()*14)+1
    //galeria.innerHTML = numero
    //galeria.innerHTML = '<img src="../img/'+numero+'..jpg">'

    let listaImagem = ""
    let numeros = new Set()
    while (numeros.size < 14) {
        let numero = Math.floor(Math.random() * 14) + 1
        numeros.add(numero)
    }
    let listanumeros = Array.from(numeros)
    listanumeros.forEach(numero => {
        listaImagem = listaImagem + '<img src="../img/' + numero + '..jpg">'
    })


    galeria.innerHTML = listaImagem

}

window.onload = exibir 