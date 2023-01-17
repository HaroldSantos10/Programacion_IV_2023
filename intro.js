//HAROLD ENOC SANTOS MORILLO
var nombres = ['jose','pedro','juan']


function funcionDeclarativa(nombre){
    console.log(`Buenas tardes, ${nombre}`)
}

const funcionexpresion = function(nombre){
    console.log(`hola funcion expresion ${nombre}`)
}

const funcioneFlecha = nombre => {
    console.log(`hola funcion de flecha ${nombre}`)
}

for(var i = 0 ; i<nombres.length; i++){
    funcionDeclarativa(nombres[i])
    funcionexpresion(nombres[i])
    funcioneFlecha(nombres[i])
}