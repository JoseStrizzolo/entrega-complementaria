//ingresar un numero y se le sumara 1 unidad 5 veces
let ingresarNumero = parseInt (prompt("Ingresar un numero"));
for (let i = 1; i <=5; i++) {
	let resultado = ingresarNumero + i ;
	alert(ingresarNumero +" + "+ i +" = "+ resultado);
}

//ingresar texto, este mismo sera incorrecto hasta que se ingrese "ESC" y se cancele
let texto = prompt("Ingresar texto");
while (texto != "ESC" ){
	alert("El usuario ingreso" + texto);
	texto = prompt("Ingresar otro dato");
}

//ingresar texto y la cantidad de veces que se repetira, se podra ver en la consola
let palabra = prompt("Ingresar palabra");
let numero = prompt("Ingrese la cantidad de veces que desea repetir la palabra");
for(let contador = 1; contador <= numero; contador++){
	console.log(palabra);
}