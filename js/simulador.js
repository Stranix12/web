function calcularTotal1() {
  // Obtener los valores ingresados por el usuario
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const aplicarIva = document.getElementById("iva").checked;
  const resultado = document.getElementById("resultado");
 const r=document.getElementById("r")
  // Calcular subtotal
  let subtotal = precio * cantidad;
  // Aplicar descuento si la cantidad es mayor a 10
  let descuento = 0 
  if (cantidad > 10){
    descuento=subtotal * 0.10
  }
  // Calcular IVA si el checkbox está seleccionado
  let  iva = 0
  if (aplicarIva==true){
    iva = (subtotal - descuento) * 0.15 
  } 
  // Calcular total
  const total = subtotal - descuento + iva;
  // Mostrar resultados en el área de texto
  resultado.innerHTML = `
                Subtotal: ${subtotal.toFixed(2)} USD
                Descuento: ${descuento.toFixed(2)} USD
                IVA: ${iva.toFixed(2)} USD
                Total a pagar: ${total.toFixed(2)} USD `;
r.innerHTML=`function calcularTotal1() {
  // Obtener los valores ingresados por el usuario
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const aplicarIva = document.getElementById("iva").checked;
  const resultado = document.getElementById("resultado");
 const r=document.getElementById("r")
  // Calcular subtotal
  let subtotal = precio * cantidad;
  // Aplicar descuento si la cantidad es mayor a 10
  let descuento = 0 
  if (cantidad > 10){
    descuento=subtotal * 0.10
  }
  // Calcular IVA si el checkbox está seleccionado
  let  iva = 0
  if (aplicarIva==true){
    iva = (subtotal - descuento) * 0.15 
  } 
  // Calcular total
  const total = subtotal - descuento + iva;
  // Mostrar resultados en el área de texto
  resultado.innerHTML = 
                Subtotal: {subtotal.toFixed(2)} USD
                Descuento: {descuento.toFixed(2)} USD
                IVA: {iva.toFixed(2)} USD
                Total a pagar: {total.toFixed(2)} USD `
              }

function verificarRespuesta() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '3';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 3 tiene un error 🎉</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}
function factorial(){
  numero=document.getElementById("numero").value
  resp=document.getElementById("resp")
  numero=parseInt(numero)
  const r=document.getElementById("r")


  if (isNaN(numero) || numero < 0) {
    resp.innerHTML = "Por favor, ingresa un número válido (0 o mayor).";
    return;
  }

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  resp.innerHTML = `El factorial de ${numero} es: ${resultado}`;
    r.innerHTML=`function factorial(){
  numero=document.getElementById("numero").value
  resp=document.getElementById("resp")
  numero=parseInt(numero)
  const r=document.getElementById("r")


  if (isNaN(numero) || numero < 0) {
    resp.innerHTML = "Por favor, ingresa un número válido (0 o mayor).";
    return;
  }

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }

  resp.innerHTML = El factorial de {numero} es: {resultado};`
}
function vocales(){
  const Frase = document.getElementById("Frase").value;
  let resp=document.getElementById("resp")
  const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  let contador = 0;
  const r=document.getElementById("r")

  for (let i = 0; i < Frase.length; i++) {
    if (vocales.includes(Frase[i])) {
      contador++;
    }
  }

  resp.innerHTML = `La Frase tiene ${contador} vocales.`;
  r.innerHTML=`function vocales(){
  const Frase = document.getElementById("Frase").value;
  let resp=document.getElementById("resp")
  const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  let contador = 0;
  const r=document.getElementById("r")

  for (let i = 0; i < Frase.length; i++) {
    if (vocales.includes(Frase[i])) {
      contador++;
    }
  }

  resp.innerHTML = La Frase tiene {contador} vocales.;`

}
function rango(){
  let input=document.getElementById("numero").value
  let resp=document.getElementById("resp")
  const arreglo = input.split(',').map(Number);
  const r=document.getElementById("r")    
  // Verificar si el arreglo está vacío
  if (arreglo.length === 0 || arreglo.some(isNaN)) {
      resp.innerHTML = "Por favor, ingrese números válidos.";
      return;
  }

  // Encontrar el número máximo
  const maximo = Math.max(...arreglo);
  // Mostrar el resultado
  resp.innerHTML  = "El número máximo es: " + maximo;

  r.innerHTML=`function rango(){
  let input=document.getElementById("numero").value
  let resp=document.getElementById("resp")
  const arreglo = input.split(',').map(Number);
  const r=document.getElementById("r")    
  // Verificar si el arreglo está vacío
  if (arreglo.length === 0 || arreglo.some(isNaN)) {
      resp.innerHTML = "Por favor, ingrese números válidos.";
      return;
  }

  // Encontrar el número máximo
  const maximo = Math.max(...arreglo);
  // Mostrar el resultado
  resp.innerHTML  = "El número máximo es: " + maximo;`
}
function promedio(){
  let input=document.getElementById("numero").value
  let resp=document.getElementById("resp")
  const arreglo = input.split(',').map(Number);
  let contador=0
  let suma=0
  let promedio
  const r=document.getElementById("r")
  while(contador<arreglo.length){
    suma+=arreglo[contador]
contador++
  }
  promedio = suma / arreglo.length;

  resp.innerHTML  = `El promedio de la lista ${arreglo}, es : ${promedio.toFixed(2)}`
r.innerHTML=`function promedio(){
  let input=document.getElementById("numero").value
  let resp=document.getElementById("resp")
  const arreglo = input.split(',').map(Number);
  let contador=0
  let suma=0
  let promedio
  const r=document.getElementById("r")
  while(contador<arreglo.length){
    suma+=arreglo[contador]
contador++
  }
  promedio = suma / arreglo.length;

  resp.innerHTML  = El promedio de la lista {arreglo}, es : {promedio.toFixed(2)}`
}
// Función para calcular la suma de los primeros 100 números naturales
function calcularSuma1() {
  const button = document.getElementById("calculateBtn");
  const resultDiv = document.getElementById("result");
const r=document.getElementById("r")
  // Mostrar animación de carga en el botón
  button.classList.add("loading");
  button.disabled = true;
  resultDiv.classList.remove("visible"); // Ocultar resultado anterior
  
  setTimeout(() => {
      let suma = 0;
      for (let i = 1; i <= 100; i++) {
          suma += i;
      }
      
      // Mostrar el resultado después del cálculo
      resultDiv.innerText = "La suma es: " + suma;
      resultDiv.classList.add("visible"); // Aplicar animación al resultado
    
      // Remover animación de carga del botón
      button.classList.remove("loading");
      button.disabled = false;
  }, 1000); // Simulación de tiempo de procesamiento
   r.innerHTML=`function calcularSuma1() {
  const button = document.getElementById("calculateBtn");
  const resultDiv = document.getElementById("result");
const r=document.getElementById("r")
  // Mostrar animación de carga en el botón
  button.classList.add("loading");
  button.disabled = true;
  resultDiv.classList.remove("visible"); // Ocultar resultado anterior
  
  setTimeout(() => {
      let suma = 0;
      for (let i = 1; i <= 100; i++) {
          suma += i;
      }
      
      // Mostrar el resultado después del cálculo
      resultDiv.innerText = "La suma es: " + suma;
      resultDiv.classList.add("visible"); // Aplicar animación al resultado
    
      // Remover animación de carga del botón
      button.classList.remove("loading");
      button.disabled = false;
  }, 1000);`
}



//celsiusAFahrenheit()
function convertirCelsiusAFahrenheit() {
  const celsius = document.getElementById("celsiusInput").value;
  const resultDiv = document.getElementById("result");
const r=document.getElementById("r")
  if (celsius === "") {
      resultDiv.innerText = "Por favor, ingresa una temperatura.";
      resultDiv.classList.add("visible");
      return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  resultDiv.innerText = `${celsius}°C es igual a ${fahrenheit.toFixed(2)}°F`;
  resultDiv.classList.add("visible");
  r.innerHTML=`function convertirCelsiusAFahrenheit() {
  const celsius = document.getElementById("celsiusInput").value;
  const resultDiv = document.getElementById("result");
const r=document.getElementById("r")
  if (celsius === "") {
      resultDiv.innerText = "Por favor, ingresa una temperatura.";
      resultDiv.classList.add("visible");
      return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  resultDiv.innerText = {celsius}°C es igual a {fahrenheit.toFixed(2)}°F;
  resultDiv.classList.add("visible");`
}
//calcularMediana()
function calcularMediana() {
  const input = document.getElementById("numbersInput").value;
  const resultDiv = document.getElementById("result");
const r=document.getElementById("r")
  // Convertir la entrada en un array de números
  const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

  if (numbers.length === 0) {
      resultDiv.innerText = "Por favor, ingresa una lista válida de números.";
      resultDiv.classList.add("visible");
 
      return;
  }

  // Ordenar los números
  numbers.sort((a, b) => a - b);

  // Calcular la mediana
  let mediana;
  const mid = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
      mediana = (numbers[mid - 1] + numbers[mid]) / 2;
  } else {
      mediana = numbers[mid];
  }

  // Mostrar el resultado
  resultDiv.innerText = `La mediana es: ${mediana}`;
  resultDiv.classList.add("visible");
  r.innerHTML=`function calcularMediana() {
    const input = document.getElementById("numbersInput").value;
    const resultDiv = document.getElementById("result");
  const r=document.getElementById("r")
    // Convertir la entrada en un array de números
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
  
    if (numbers.length === 0) {
        resultDiv.innerText = "Por favor, ingresa una lista válida de números.";
        resultDiv.classList.add("visible");
         // Ordenar los números
  numbers.sort((a, b) => a - b);

  // Calcular la mediana
  let mediana;
  const mid = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
      mediana = (numbers[mid - 1] + numbers[mid]) / 2;
  } else {
      mediana = numbers[mid];
  }

  // Mostrar el resultado
  resultDiv.innerText = La mediana es: {mediana};
  resultDiv.classList.add("visible");`
}
//verificarPalindromo()
function verificarPalindromo() {
  const inputString = document.getElementById("inputString").value.trim();
  const resultDiv = document.getElementById("result");
const r=document.getElementById("r")
  if (inputString === "") {
      resultDiv.innerText = "Por favor, ingresa una cadena.";
      resultDiv.classList.add("visible");
      return;
  }

  // Convertir la cadena a minúsculas y eliminar espacios
  const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Comparar la cadena original con su reverso
  const reversedString = cleanedString.split("").reverse().join("");

  if (cleanedString === reversedString) {
      resultDiv.innerText = `"${inputString}" es un palíndromo.`;
  } else {
      resultDiv.innerText = `"${inputString}" no es un palíndromo.`;
  }

  resultDiv.classList.add("visible");
  r.innerHTML=`function verificarPalindromo() {
  const inputString = document.getElementById("inputString").value.trim();
  const resultDiv = document.getElementById("result");
const r=document.getElementById("r")
  if (inputString === "") {
      resultDiv.innerText = "Por favor, ingresa una cadena.";
      resultDiv.classList.add("visible");
      return;
  }

  // Convertir la cadena a minúsculas y eliminar espacios
  const cleanedString = inputString.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Comparar la cadena original con su reverso
  const reversedString = cleanedString.split("").reverse().join("");

  if (cleanedString === reversedString) {
      resultDiv.innerText = "{inputString}" es un palíndromo.;
  } else {
      resultDiv.innerText = "{inputString}" no es un palíndromo.;
  }

  resultDiv.classList.add("visible");`
}
//contarConsonantes()
function contarConsonantes() {
  const inputString = document.getElementById("inputString").value.trim();
  const resultDiv = document.getElementById("result");
const r=document.getElementById("r")
  if (inputString === "") {
      resultDiv.innerText = "Por favor, ingresa una frase.";
      resultDiv.classList.add("visible");
      return;
  }

  // Definir las consonantes en español (sin incluir vocales)
  const consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

  let count = 0;

  // Iterar a través de cada carácter de la frase
  for (let i = 0; i < inputString.length; i++) {
      if (consonantes.includes(inputString[i])) {
          count++;
      }
  }

  // Mostrar el resultado
  resultDiv.innerText = `Número de consonantes: ${count}`;
  resultDiv.classList.add("visible");
  r.innerHTML=`function contarConsonantes() {
  const inputString = document.getElementById("inputString").value.trim();
  const resultDiv = document.getElementById("result");
const r=document.getElementById("r")
  if (inputString === "") {
      resultDiv.innerText = "Por favor, ingresa una frase.";
      resultDiv.classList.add("visible");
      return;
  }

  // Definir las consonantes en español (sin incluir vocales)
  const consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

  let count = 0;

  // Iterar a través de cada carácter de la frase
  for (let i = 0; i < inputString.length; i++) {
      if (consonantes.includes(inputString[i])) {
          count++;
      }
  }

  // Mostrar el resultado
  resultDiv.innerText =Número de consonantes: {count};
  resultDiv.classList.add("visible");`
}
//funcion numero 6 perfecto
function verificarNumeroPerfecto() {
  const numero = parseInt(document.getElementById("numero").value);
  let suma = 0;
const r=document.getElementById("r")
  // Sumar los divisores del número
  for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
          suma += i;
      }
  }

  // Verificar si la suma de los divisores es igual al número
  const resultadoDiv = document.getElementById("resultado");
  if (suma === numero) {
      resultadoDiv.innerHTML = numero + " es un número perfecto.";
    
  } else {
      resultadoDiv.innerHTML = numero + " no es un número perfecto.";
  }
  r.innerHTML=`function verificarNumeroPerfecto() {
  const numero = parseInt(document.getElementById("numero").value);
  let suma = 0;
const r=document.getElementById("r")
  // Sumar los divisores del número
  for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
          suma += i;
      }
  }

  // Verificar si la suma de los divisores es igual al número
  const resultadoDiv = document.getElementById("resultado");
  if (suma === numero) {
      resultadoDiv.innerHTML = numero + " es un número perfecto.";
    
  } else {
      resultadoDiv.innerHTML = numero + " no es un número perfecto.";
  }`
}

//Numeros divisibles por 3 y 7
function calcularNumeros() {
  let resultados = document.getElementById('resultados');
  resultados.innerHTML = ''; // Limpiar resultados anteriores
  let sumaPares = 0;
  let sumaImpares = 0;
  const r=document.getElementById("r")
  
  for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 7 === 0) {
          resultados.innerHTML += `${i} es divisible por 3 y 7<br>`;
      }
      if (i % 2 === 0) {
          sumaPares += i;
      } else {
          sumaImpares += i;
      }
  }

  resultados.innerHTML += `<br>Suma de números pares: ${sumaPares}<br>`;
  resultados.innerHTML += `Suma de números impares: ${sumaImpares}<br>`;
  r.innerHTML=`function calcularNumeros() {
  let resultados = document.getElementById('resultados');
  resultados.innerHTML = ''; // Limpiar resultados anteriores
  let sumaPares = 0;
  let sumaImpares = 0;
  const r=document.getElementById("r")
  
  for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 7 === 0) {
          resultados.innerHTML += {i} es divisible por 3 y 7<br>;
      }
      if (i % 2 === 0) {
          sumaPares += i;
      } else {
          sumaImpares += i;
      }
  }

  resultados.innerHTML += <br>Suma de números pares: {sumaPares}<br>;
  resultados.innerHTML += Suma de números impares:{sumaImpares}<br>;`
}

//Calculadora de Factura
function calcularFactura() {
  const dia = document.getElementById('dia').value;
  const personas = parseInt(document.getElementById('personas').value);
  const pagoTarjeta = document.getElementById('pagoTarjeta').value;
  let total = parseFloat(document.getElementById('total').value);
const r=document.getElementById("r")
  if ((dia === 'lunes' || dia === 'miércoles') && personas > 4) {
      total *= 0.85; // Descuento del 15%
  }

  if (dia === 'sábado' || dia === 'domingo') {
      total *= 1.10; // Recargo del 10%
  }

  if (pagoTarjeta === 'sí') {
      total *= 1.05; // Comisión del 5%
  }

  document.getElementById('resultado').innerText = `Total a pagar: $${total.toFixed(2)}`; 
r.innerHTML=`function calcularFactura() {
  const dia = document.getElementById('dia').value;
  const personas = parseInt(document.getElementById('personas').value);
  const pagoTarjeta = document.getElementById('pagoTarjeta').value;
  let total = parseFloat(document.getElementById('total').value);
const r=document.getElementById("r")
  if ((dia === 'lunes' || dia === 'miércoles') && personas > 4) {
      total *= 0.85; // Descuento del 15%
  }

  if (dia === 'sábado' || dia === 'domingo') {
      total *= 1.10; // Recargo del 10%
  }

  if (pagoTarjeta === 'sí') {
      total *= 1.05; // Comisión del 5%
  }

  document.getElementById('resultado').innerText = Total a pagar: {total.toFixed(2)}; `
  }
  
  //numeros con arreglos 
  function calcularSuma() {
    const numero = document.getElementById("numero").value;
    const digitos = Array.from(String(numero), Number);
    const suma = digitos.reduce((acc, curr) => acc + curr, 0);
const r=document.getElementById("r")
    document.getElementById("resultado").innerHTML = `
        <p>Arreglo de dígitos: [${digitos.join(", ")}]</p>
        <p>Suma de dígitos: ${suma}</p>
    `
    r.innerHTML=`function calcularSuma() {
    const numero = document.getElementById("numero").value;
    const digitos = Array.from(String(numero), Number);
    const suma = digitos.reduce((acc, curr) => acc + curr, 0);
const r=document.getElementById("r")
    document.getElementById("resultado").innerHTML = 
        <p>Arreglo de dígitos: [{digitos.join(", ")}]</p>
        <p>Suma de dígitos: {suma}</p>
    `;
}

//numeros divisores 6
function calcularDivisores() {
    const numero = document.getElementById("numero").value;
    const divisores = [];
const r=document.getElementById("r")
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    document.getElementById("resultado").innerHTML = `
        <p>Número: ${numero}</p>
        <p>Divisores: ${divisores.join(", ")}</p>
    `;

    r.innerHTML=`function calcularDivisores() {
    const numero = document.getElementById("numero").value;
    const divisores = [];
const r=document.getElementById("r")
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }

    document.getElementById("resultado").innerHTML = 
        <p>Número: {numero}</p>
        <p>Divisores:{divisores.join(", ")}</p>
    ;
`
}

//Frase del 9  octubre
function contarDigitos() {
  const frase = document.getElementById("frase").value;
  let contador = 0;
const r=document.getElementById("r")
  for (let i = 0; i < frase.length; i++) {
      if (!isNaN(frase[i]) && frase[i] !== " ") {
          contador++;
      }
  }

  document.getElementById("resultado").innerHTML = `
      <p>${contador} dígito(s) tiene la frase.</p>
  `;

  r.innerHTML=`//Frase del 9  octubre
function contarDigitos() {
  const frase = document.getElementById("frase").value;
  let contador = 0;
const r=document.getElementById("r")
  for (let i = 0; i < frase.length; i++) {
      if (!isNaN(frase[i]) && frase[i] !== " ") {
          contador++;
      }
  }

  document.getElementById("resultado").innerHTML = 
      <p>{contador} dígito(s) tiene la frase.</p>
  ;`
}

//Bucle 3 
function contarPalabras() {
  const frase = document.getElementById('frase').value;
  const palabras = frase.trim().split(/\s+/);
  const numPalabras = palabras.length;
 const r=document.getElementById("r")
  document.getElementById('resultado').innerText = `${numPalabras} palabras tiene la frase`;
r.innerHTML=`function contarPalabras() {
  const frase = document.getElementById('frase').value;
  const palabras = frase.trim().split(/\s+/);
  const numPalabras = palabras.length;
 const r=document.getElementById("r")
  document.getElementById('resultado').innerText ={numPalabras} palabras tiene la frase;`

}

//10 numeros 
function generarYPromediarPares() {
  const numeros = [];
  let sumaPares = 0;
  let contadorPares = 0;
  const r=document.getElementById("r")


  // Generar 10 números aleatorios y almacenarlos en el arreglo
  for (let i = 0; i < 10; i++) {
      const numero = Math.floor(Math.random() * 100) + 1; // Números del 1 al 100
      numeros.push(numero);
  }

  // Recorrer el arreglo y calcular la suma de los números pares
  for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
          sumaPares += numeros[i];
          contadorPares++;
      }
  }

  // Calcular el promedio de los números pares
  const promedioPares = contadorPares > 0 ? sumaPares / contadorPares : 0;

  // Presentar el promedio de los números pares
  document.getElementById('resultado').innerHTML = `
      <p>Números generados: ${numeros.join(', ')}</p>
      <p>Promedio de los números pares: ${promedioPares.toFixed(2)}</p>
  `
  
  r.innerHTML=`function generarYPromediarPares() {
  const numeros = [];
  let sumaPares = 0;
  let contadorPares = 0;
  const r=document.getElementById("r")


  // Generar 10 números aleatorios y almacenarlos en el arreglo
  for (let i = 0; i < 10; i++) {
      const numero = Math.floor(Math.random() * 100) + 1; // Números del 1 al 100
      numeros.push(numero);
  }

  // Recorrer el arreglo y calcular la suma de los números pares
  for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
          sumaPares += numeros[i];
          contadorPares++;
      }
  }

  // Calcular el promedio de los números pares
  const promedioPares = contadorPares > 0 ? sumaPares / contadorPares : 0;

  // Presentar el promedio de los números pares
  document.getElementById('resultado').innerHTML = 
      <p>Números generados: {numeros.join(', ')}</p>
      <p>Promedio de los números pares: {promedioPares.toFixed(2)}</p>
  `
  ;
}

//Una tienda
function calcularTotal() {
  const tvCount = parseInt(document.getElementById('tvCount').value) || 0;
  const fridgeCount = parseInt(document.getElementById('fridgeCount').value) || 0;
  const unitPrice = parseFloat(document.getElementById('unitPrice').value) || 0;
const r=document.getElementById("r")
  let total = (tvCount + fridgeCount) * unitPrice;
  let descuento = 0;

  if (tvCount >= 2) {
      descuento += tvCount * unitPrice * 0.10;
  }
  if (fridgeCount > 3) {
      descuento += fridgeCount * unitPrice * 0.15;
  }

  total -= descuento;

  if (total > 2000) {
      total *= 0.95;
  }

  document.getElementById('result').innerText = `Total a pagar después de descuentos: $${total.toFixed(2)}`;
r.innerHTML=`function calcularTotal() {
  const tvCount = parseInt(document.getElementById('tvCount').value) || 0;
  const fridgeCount = parseInt(document.getElementById('fridgeCount').value) || 0;
  const unitPrice = parseFloat(document.getElementById('unitPrice').value) || 0;
const r=document.getElementById("r")
  let total = (tvCount + fridgeCount) * unitPrice;
  let descuento = 0;

  if (tvCount >= 2) {
      descuento += tvCount * unitPrice * 0.10;
  }
  if (fridgeCount > 3) {
      descuento += fridgeCount * unitPrice * 0.15;
  }

  total -= descuento;

  if (total > 2000) {
      total *= 0.95;
  }

  document.getElementById('result').innerText = Total a pagar después de descuentos: {total.toFixed(2)};`
}


function primos() {
  debugger
  let resp = "", num = "", r = 0, divisor = 2, primo = 1
const rr=document.getElementById("rr")
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
  rr.innerHTML=`
function primos() {
  debugger
  let resp = "", num = "", r = 0, divisor = 2, primo = 1
const rr=document.getElementById("r")
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
    resp.innerHTML = {num} Es Primo
  } else {
    resp.innerHTML ={num} No Es Primo
  }`
}