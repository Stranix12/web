// Función simplificada para calcular el promedio de números mayores a un valor dado
function calcularPromedio() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const limiteStr = document.getElementById("limite").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));
  const limite = parseFloat(limiteStr);

  // Inicializar variables para la suma y el conteo
  let suma = 0;
  let conteo = 0;

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      suma += numeros[i];
      conteo++;
    }
  }

  // Calcular el promedio si hay números que cumplan la condición
  let promedio = 0;
  if (conteo > 0) {
    promedio = suma / conteo;
    respuesta.innerHTML = `Promedio: ${promedio.toFixed(2)}`;
  } else {
    respuesta.innerHTML = "No hay números mayores que el límite.";
  }
}

function aleatorio() {
  let numeros = [];  // Crear un arreglo vacío

  // Generar 10 números aleatorios
  for (let i = 0; i < 10; i++) {
      let aleatorio = Math.floor(Math.random() * 100) + 1;  // Generar número entre 1 y 100
      numeros.push(aleatorio);  // Agrega al arreglo
  }

  // Muestra los números del arreglo
  document.getElementById("resp").value = numeros.join(", ");
}

function CincoNotas() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números en un arreglo de números
  const numeros = numerosStr.split(',').map(num => parseFloat(num.trim()));

  // Inicializar variables para la suma y el promedio
  let suma = 0;
  let conteo = 0;

  // Recorrer el arreglo de números y calcular la suma de todos los números
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];  // Sumar todos los números
    conteo++;  // Contar la cantidad de números
  }

  // Calcular el promedio si hay números en el arreglo
  if (conteo > 0) {
    const promedio = suma / conteo;
    respuesta.innerHTML = `Promedio: ${promedio.toFixed(2)}`;
  } else {
    respuesta.innerHTML = "No hay números ingresados, intente de nuevo";
  }
}

function Maximo() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números en un arreglo de números
  const numeros = numerosStr.split(',').map(num => parseFloat(num.trim()));

  // Verificar si hay números en el arreglo
  if (numeros.length > 0) {
    let maximo = numeros[0];  // Inicializar el valor máximo con el primer número

    // Recorrer el arreglo de números y encontrar el valor máximo
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > maximo) {
        maximo = numeros[i];  // Actualizar el valor máximo si encontramos uno mayor
      }
    }

    // Mostrar el valor máximo encontrado
    respuesta.innerHTML = `Valor más alto: ${maximo}`;
  } else {
    // Si no hay números ingresados
    respuesta.innerHTML = "No hay números ingresados, intente de nuevo";
  }
}

function Minimo() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números en un arreglo de números
  const numeros = numerosStr.split(',').map(num => parseFloat(num.trim()));

  // Verificar si hay números en el arreglo
  if (numeros.length > 0) {
    let minimo = numeros[0];  // Inicializar el valor mínimo con el primer número

    // Recorrer el arreglo de números y encontrar el valor mínimo
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] < minimo) {
        minimo = numeros[i];  // Actualizar el valor mínimo si encontramos uno menor
      }
    }

    // Mostrar el valor mínimo encontrado
    respuesta.innerHTML = `Valor más bajo: ${minimo}`;
  } else {
    // Si no hay números ingresados
    respuesta.innerHTML = "No hay números ingresados, intente de nuevo";
  }
}

function ArregloPar() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números en un arreglo de números
  const numeros = numerosStr.split(',').map(num => parseFloat(num.trim()));

  // Inicializar variables para la suma de los pares y el conteo de los pares
  let sumaPares = 0;
  let conteoPares = 0;

  // Recorrer el arreglo de números y calcular la suma y el conteo de los números pares
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {  // Comprobar si el número es par
      sumaPares += numeros[i];  // Sumar los números pares
      conteoPares++;  // Contar los números pares
    }
  }

  // Calcular el promedio de los números pares si hay números pares
  if (conteoPares > 0) {
    const promedioPares = sumaPares / conteoPares;
    respuesta.innerHTML = `Promedio de los números pares: ${promedioPares.toFixed(2)}`;
  }
  else {
    // Si no hay números ingresados
    respuesta.innerHTML = "No hay números ingresados, intente de nuevo";
}
}

function SumarDigitos() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números en un arreglo de números
  const numeros = numerosStr.split(',').map(num => num.trim());

  // Inicializar una variable para la suma de los dígitos
  let sumaDigitos = 0;

  // Recorrer el arreglo de números y sumar los dígitos de cada número
  for (let i = 0; i < numeros.length; i++) {
    // Iterar sobre cada caracter de cada número
    for (let j = 0; j < numeros[i].length; j++) {
      // Verificar si el caracter es un dígito
      if (numeros[i][j] >= '0' && numeros[i][j] <= '9') {
        sumaDigitos += parseInt(numeros[i][j]); // Convertir el dígito a número y sumarlo
      }
    }
  }

  // Mostrar el resultado de la suma de los dígitos
  respuesta.innerHTML = `Suma de los dígitos: ${sumaDigitos}`;
}

function PositivosNegativos() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números en un arreglo de números
  const numeros = numerosStr.split(',').map(num => parseFloat(num.trim()));

  // Inicializar variables para contar y sumar los números positivos y negativos
  let positivosCont = 0, negativosCont = 0;
  let sumaPositivos = 0, sumaNegativos = 0;

  // Recorrer el arreglo de números y contar y sumar los positivos y negativos
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      positivosCont++;      // Contar los positivos
      sumaPositivos += numeros[i]; // Sumar los positivos
    } else if (numeros[i] < 0) {
      negativosCont++;      // Contar los negativos
      sumaNegativos += numeros[i]; // Sumar los negativos
    }
  }

  // Mostrar el resultado
  respuesta.innerHTML = `
    Números positivos: ${positivosCount}
    Suma de positivos: ${sumaPositivos.toFixed(2)}
    Números negativos: ${negativosCount}
    Suma de negativos: ${sumaNegativos.toFixed(2)}
  `;
}

function Cuadrados() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números en un arreglo de números
  const numeros = numerosStr.split(',').map(num => parseFloat(num.trim()));

  // Verificar si el arreglo está vacío (es decir, si no se han ingresado números)
  if (numeros.length > 0 && !numeros.includes(NaN)) {
    // Inicializar el arreglo para los cuadrados
    const cuadrados = [];

    // Recorrer el arreglo de números y llenar el arreglo de cuadrados
    for (let i = 0; i < numeros.length; i++) {
      cuadrados[i] = numeros[i] * numeros[i]; // Calcular el cuadrado y asignarlo al arreglo
    }

    // Mostrar el arreglo con los cuadrados
    respuesta.innerHTML = `Arreglo con los cuadrados: [${cuadrados.join(', ')}]`;
  } else {
    // Si no hay números ingresados o la entrada no es válida
    respuesta.innerHTML = "No hay números ingresados, intente de nuevo.";
  }
}

function SumarArreglos() {
  // Obtener los valores ingresados por el usuario
  const arreglo1Str = document.getElementById("arreglo1").value;
  const arreglo2Str = document.getElementById("arreglo2").value;
  const respuesta = document.getElementById("resp");

  // Convertir las listas de números en arreglos de números
  const arreglo1 = arreglo1Str.split(',').map(num => parseFloat(num.trim()));
  const arreglo2 = arreglo2Str.split(',').map(num => parseFloat(num.trim()));

  // Verificar si ambos arreglos tienen la misma longitud
  if (arreglo1.length === arreglo2.length && arreglo1.length > 0) {
    // Inicializar el arreglo para la suma
    const sumaArreglos = [];

    // Recorrer ambos arreglos y sumar los elementos correspondientes
    for (let i = 0; i < arreglo1.length; i++) {
      sumaArreglos[i] = arreglo1[i] + arreglo2[i]; // Sumar los elementos correspondientes
    }

    // Construir el resultado de forma manual
    let resultado =
    'Arreglo con la suma de los elementos: [';
    for (let i = 0; i < sumaArreglos.length; i++) {
      resultado += sumaArreglos[i];
      if (i < sumaArreglos.length - 1) {
        resultado += ', '; // Añadir una coma y espacio si no es el último elemento
      }
    }
    resultado += ']';

    // Mostrar el resultado
    respuesta.innerHTML = resultado;
  } else {
    // Si los arreglos no tienen la misma longitud o están vacíos
    respuesta.innerHTML = "Los arreglos no tienen la misma longitud o no se ingresaron valores válidos.";
  }
}
