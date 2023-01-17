//HAROLD ENOC SANTOS MORILLO

var data = [
    {nombre: 'jose', edad: '25'},
    {nombre: 'alfredo', edad: 30},
    {nombre: 'carmen', edad: 30},

]

data.forEach(function(dato){
    console.log(dato.nombre)
})

var resultado = data.filter(function(dato){
    return dato.nombre
})

var resultado = data.map(function(dato){
    return dato.nombre
})