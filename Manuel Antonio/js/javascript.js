let miNumero = "15";

console.log(typeof miNumero);

let edad = Number(miNumero);

let z;

if(isNaN(edad)){
    console.log("No es un numero");
}
else{
     z = (edad < 18) ? "Muy Joven para votar" : "Si puede votar";
}

console.log(z);

let vector = new Array(10);

console.log(vector.length);

for(let i =0;i<vector.length;i++){
    vector[i] = i;
}

console.log(vector);

function multiplicar(a,b){
    return a*b;
}

console.log(multiplicar(2,5));

let sumar = function(a,b){return a+b};

let resultado = sumar(2,2);

console.log(resultado);

const sumarTipoFlecha = (a,b) => a + b;

console.log(sumarTipoFlecha(9,1));

//Paso por valor
let b = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(b);
console.log(b);

//Paso por Referencia
const Persona = {
    nombre: "Franklin",
    apellido: "Sandoval",
    correo: "franklin@gmail.com",
    edad: 20,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

function cambiarNombre(p1){
    p1.nombre = "Carlos";
}

cambiarNombre(Persona);

console.log(Persona);

console.log(Persona.nombreCompleto());


let persona2 = new Object();
persona2.nombre = "Franklin";
persona2.direccion = "Alajuela Costa Rica";
persona2.tel = 64711276;

console.log(persona2.nombre);
console.log(persona2['direccion']);

for(atributo in persona2){
    console.log(atributo);
    console.log(persona2[atributo]); 
}
//Eliminar atributos
delete persona2.tel;

for(atributo in persona2){
    console.log(atributo);
    console.log(persona2[atributo]); 
}
