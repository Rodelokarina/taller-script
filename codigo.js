let mensaje = "Hola Mundo!";

console.log(mensaje);

mensaje = "Soy el primer script";

console.log(mensaje);

let  meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  for (var i = 0; i < meses.length; i++) {
    console.log(meses[i]);
  } 

//ejercicio #4 

let valores = [true, 5, false, "hola", "adios", 2];

let texto1 = valores[3];
let texto2 = valores[4]; 

if (texto1.length > texto2.length) {
    console.log(texto1 + " es mayor que " + texto2);
} else if (texto1.length < texto2.length) {
    console.log(texto2 + " es mayor que " + texto1);
} else {
    console.log("Ambos textos tienen la misma longitud.");
}

// valores true -  false 

let valor = [true, 5, false, "hola", "adios", 2];

let resultadoTrue = valor[0] && valor[2]; 
let resultadoFalse = valor[0] || valor[2]; 

console.log("Resultado True:", resultadoTrue);
console.log("Resultado False:", resultadoFalse);

// operaciones matematicas

let valores1 = [true, 5, false, "hola", "adios", 2];

let numero1 = valores[1]; 
let numero2 = valores[5]; 

let suma = numero1 + numero2; 
let resta = numero1 - numero2; 
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2; 
let potencia = Math.pow(numero1, numero2);

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);
console.log("Potencia:", potencia);

// ejercicio #6 

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J',
 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let numeroDNI = parseInt(prompt("Introduce tu número de DNI"));
let letraUsuario = prompt("Introduce la letra de tu DNI");

if (numeroDNI < 0 || numeroDNI > 99999999) {
  console.log("El número de DNI proporcionado no es válido.");
} else {
  let resto = numeroDNI % 23;
  let letraCalculada = letras[resto];
  
  if (letraCalculada !== letraUsuario) {
    console.log("La letra que has indicado no es correcta. La letra correcta es " + letraCalculada + ".");
  } else {
    console.log("El número y la letra del DNI son correctos.");
  }
}

//ejercicio #7 

let numero = parseInt(prompt("Introduce un número entero para calcular su factorial:"));
let factorial = 1;

if (numero >= 0) {
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  console.log(`El factorial de ${numero} es: ${factorial}`);
} else {
  console.log("El factorial de un número negativo no está definido.");
}







