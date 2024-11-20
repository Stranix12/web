// Función para verificar si un número es primo
function primos() {
  debugger
  let resp = "", num = "", r = 0, divisor = 2, primo = 1

  // Obtiene el valor en "numero" y lo convierte a entero
  num = document.getElementById("numero").value
  resp = document.getElementById("resp")
  num = parseInt(num)

  // Bucle para verificar si num es divisible por algún número menor a sí mismo
  while (divisor < num && primo == 1) {
    r = num % divisor
    if (r == 0) {     // Si el residuo es 0, entonces no es primo
      primo = 0
    } else {
      divisor = divisor + 1
    }
  }

  // Muestra si el número es primo o no
  if (primo == 1) {
    resp.innerHTML = `😊${num} Es Primo`
  } else {
    resp.innerHTML = `😞${num} No Es Primo`
  }
}
function presimpares() {
  let numero_ini = 1;
  let numero_fin = 50;
  let resp = document.getElementById("resp");

  while (numero_ini <= numero_fin) {
    if (numero_ini % 2 !== 0) {
      resp.innerHTML += numero_ini + ',';
    }
    numero_ini++; // Incrementamos el valor de numero_ini
  }
}
 function suma100(){
  let resp=document.getElementById("resp")
  let suma=0

  for(let i=1; i<=100;i++){
suma+=i
resp.innerHTML=`la sum de los numeros es ${suma}`

  }
 }

 function sumapares(){
  let numero=document.getElementById("numero").value
  numero=parseInt(numero)
  let resp=document.getElementById("resp")
let pares=0
  for(let i=0; i<=numero;i++){
    if(i %  2 ===0){

      pares+=i
      resp.innerHTML=`la suma de los numeros pares es ${pares}`

    }
  }
 }
 function divisores(){
  let resp=document.getElementById("resp")
  let contador=""
  for(let i=1;i<=100;i++){
    if(i % 3==0 && i % 5===0){
      contador += i + ","; // Acumulamos el número con un salto de línea
    }
    
  }
  resp.innerHTML = contador;

 }
 function tablas() {
  let numero = document.getElementById("numero").value;
  let resp = document.getElementById("resp");
  let resultado = ""; // Variable para acumular los resultados

  for (let i = 1; i <= 10; i++) {
    let mul = numero * i;
    resultado += `${numero} * ${i} = ${mul}\n`; // Acumulamos el resultado con un salto de línea
  }

  // Mostramos todos los resultados al final
  resp.value = resultado;
}
function fibonacci() {
  let n = parseInt(document.getElementById("numero").value); // Obtener el valor de n
  let resp = document.getElementById("resp");
  
  // Validar si el valor de n es mayor que 0
  if (n <= 0) {
    resp.innerHTML = "Por favor ingrese un número mayor que 0.";
    return;
  }

  let fib0 = 0; // Primer número de la serie de Fibonacci
  let fib1 = 1; // Segundo número de la serie de Fibonacci
  let fib2 = 0; // Variable para el siguiente número de Fibonacci

  let resultado = fib0 + " " + fib1; // Comenzamos con los primeros dos números

  // Generamos los siguientes números de Fibonacci
  for (let i = 2; i < n; i++) {
    fib2 = fib0 + fib1; // El siguiente número es la suma de los dos anteriores
    resultado += " " + fib2; // Añadimos el siguiente número al resultado
    fib0 = fib1; // El número anterior se convierte en el número actual
    fib1 = fib2; // El número actual se convierte en el siguiente número
  }

  // Mostrar el resultado en el div
  resp.innerHTML = resultado;
}
function mul10(){

  let resp=document.getElementById("resp")
  let resultado = 1;
for (let i = 1; i <= 10; i++) {
    resultado *= i; // Multiplica el resultado acumulado por el siguiente número
resp.innerHTML=resultado
  }
}function factorial(){
  numero=document.getElementById("numero").value
  resp=document.getElementById("resp")
  numero=parseInt(numero)

  if (isNaN(numero) || numero < 0) {
    resp.innerHTML = "Por favor, ingresa un número válido (0 o mayor).";
    return;
  }

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  resp.innerHTML = `El factorial de ${numero} es: ${resultado}`;
}
function div1al20(){
  let numero=document.getElementById("numero").value
  let resp=document.getElementById("resp")
let resultado=""
  for(let i=1;i<=20;i++){
    if( numero % i ==0){

      resultado+=i +" "

      resp.innerHTML="Los numeros divisores de "+numero+" entre 1 al 20 es:"+resultado
    }
  }
}
function divisoresnum(){
  let numero=document.getElementById("numero").value
  let resp=document.getElementById("resp")
  let resultado=""
for(let i=0;i<numero;i++){
  if(numero% i==0){
    resultado+=i+ " "
    resp.innerHTML="los divisores de "+numero+" es: "+resultado
  }
}
}
function verificarNumeroPerfecto() {
  const numero = parseInt(document.getElementById("numero").value);
  let suma = 0;

  // Sumar los divisores del número
  for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
          suma += i;
      }
  }

  // Verificar si la suma de los divisores es igual al número
  const resp = document.getElementById("resp");
  if (suma === numero) {
    resp.innerHTML = numero + " es un número perfecto.";
  } else {
    resp.innerHTML = numero + " no es un número perfecto.";
  }
}
function primos() {
  debugger
  let resp = "", num = "", r = 0, divisor = 2, primo = 1

  // Obtiene el valor en "numero" y lo convierte a entero
  num = document.getElementById("numero").value
  resp = document.getElementById("resp")
  num = parseInt(num)

  // Bucle para verificar si num es divisible por algún número menor a sí mismo
  while (divisor < num && primo == 1) {
    r = num % divisor
    if (r == 0) {     // Si el residuo es 0, entonces no es primo
      primo = 0
    } else {
      divisor = divisor + 1
    }
  }

  // Muestra si el número es primo o no
  if (primo == 1) {
    resp.innerHTML = `${num} Es Primo`
  } else {
    resp.innerHTML = `${num} No Es Primo`
  }
}
// Función para invertir un número ingresado
function numeroInvertido() {
  debugger
  let resp = "", num = "", dig = 0, msg = ""

  // Obtiene el número ingresado y lo convierte a entero
  num = document.getElementById("numero").value
  resp = document.getElementById("resp")
  num = parseInt(num)

  // Bucle para invertir el número al extraer cada dígito
  while (num > 0) {
    dig = num % 10          // Obtiene el último dígito de num
    msg = msg + `${dig}`     // Agrega el dígito al mensaje
    num = Math.trunc(num / 10) // Elimina el último dígito
  }

  // Muestra el número invertido en el campo "resp"
  resp.innerHTML = msg
}
function contarDigitos() {
  const numero = document.getElementById("numero").value;
  let contador = 0;

  for (let i = 0; i < numero.length; i++) {
      if (!isNaN(numero[i]) && numero[i] !== " ") {
          contador++;
      }
  }

  document.getElementById("resp").innerHTML = ` ${contador} dígito(s) tiene la frase.
  `;
}

function generarTriangulo() {
  const numero = parseInt(document.getElementById('numero').value);
  const resp = document.getElementById('resp');
  resp.textContent = ''; // Limpiar el contenido previo

  if (isNaN(numero) || numero <= 0) {
    resp.textContent = 'Por favor, introduce un número válido mayor que 0.';
      return;
  }

  for (let i = 1; i <= numero; i++) {
      let linea = ''; // Inicializa la línea vacía
      for (let j = 1; j <= i; j++) {
          linea += '*'; // Agrega un asterisco por cada iteración
      }
      resp.textContent += linea + '\n'; // Agrega la línea al resultado
  }
}