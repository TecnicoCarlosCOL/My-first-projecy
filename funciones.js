/* 
function factorial(numero){
    let resultado= 1
    for (let i = 1; i<=numero; i++){
        resultado = resultado * i
    }
    return resultado
}
const fac= factorial(6)
console.log (fac)
console.log("Otra vez: ", fac)


const factorial= (numero) =>{
    let resultado= 1
    for (let i = 1; i<=numero; i++){
        resultado = resultado * i
    }
    return resultado
}
const fac= factorial(6)
console.log (fac)
console.log("Otra vez: ", fac).console
*/

const recetas = [
    {
        nombre: "Pan",
        ingredientes: ["azucar","harina","agua","levadura"],
        precio: 45000,
        peso: 93.5
    },
    {
        nombre: "bandeja paisa",
        ingredientes: ["huevo","chicharron","queso",""],
        precio: 50000,
        peso: 98.5
    }
]

recetas.forEach(function(receta){
    console.log(`Nombre de la receta: ${receta.nombre},
        precio: ${receta.precio}
        Ingredientes: ${receta.ingredientes.map((ingrediente, i) => `${i+1}: ${ingrediente}\n`).join(" ")}
        `)
})
