// Función para agregar un espacio entre cada carácter de la palabra ingresada
function generarEspaciado() {
  // Obtener la palabra ingresada por el usuario
  const palabra = document.getElementById("palabra").value;
  // obtener el control para asignar la respuesta
  const respuesta = document.getElementById("resp");

  // Inicializar una variable para almacenar la nueva palabra con espacios
  let resultado = "";

  // Usar un bucle para recorrer cada carácter de la palabra
  for (let i = 0; i < palabra.length; i++) {
    // Agregar el carácter actual a la variable resultado seguido de un espacio
    // if (palabra[i]=="a")
    resultado += palabra[i] + " ";
  }

  // Mostrar el resultado en el área de texto
  respuesta.innerHTML = resultado.trim(); // Eliminar el último espacio al final
}

//COMPARADOR DE FRASES
function compararFrases() {
  const frase1 = document.getElementById("frase1").value.trim();
  const frase2 = document.getElementById("frase2").value.trim();

  let resultado;
  if (frase1 === frase2) {
      resultado = "Las frases son iguales.";
  } else if (frase1 > frase2) {
      resultado = "La primera frase es mayor que la segunda.";
  } else {
      resultado = "La primera frase es menor que la segunda.";
  }

  document.getElementById("result").textContent = resultado;
  }

  //Concatenar nombres y apellidos
  function concatenarNombreApellido() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();

    if (nombre && apellido) {
        const resultado = `${apellido}, ${nombre}`;
        document.getElementById("result").textContent = "Resultado: " + resultado;
    } else {
        document.getElementById("result").textContent = "Por favor, ingresa un nombre y un apellido.";
    }
    }

    //Separador de palabras
    function separarCaracteres() {
      const palabra = document.getElementById("palabra").value.trim();
  
      if (palabra) {
          // Crear una nueva palabra con espacios entre cada carácter
          const palabraConEspacios = palabra.split('').join(' ');
          document.getElementById("result").textContent = "Resultado: " + palabraConEspacios;
      } else {
          document.getElementById("result").textContent = "Por favor, ingresa una palabra.";
      }
      }

      //Palabra con el codigo ASCII
      function mostrarCodigosASCII() {
        const frase = document.getElementById("frase").value;
    
        if (frase) {
        let resultado = "";
        for (let i = 0; i < frase.length; i++) {
        const caracter = frase[i];
        const codigoASCII = caracter.charCodeAt(0); // Obtener el código ASCII del carácter
        resultado += `<div class="character">${caracter} ➡️ ${codigoASCII}</div>`;
            }
        document.getElementById("result").innerHTML = resultado;
        } else {
        document.getElementById("result").textContent = "Por favor, ingresa una frase.";
        }
        }

        //Invertir la frase
        function invertirFrase() {
          const frase = document.getElementById("frase").value.trim();
    
          if (frase) {
            // Invertir la frase
            const fraseInvertida = frase.split('').reverse().join('');
            document.getElementById("result").textContent = "Frase invertida: " + fraseInvertida;
          } else {
            document.getElementById("result").textContent = "Por favor, ingresa una frase.";
          }
        }

        //Concatenar Vocales
        function contarVocales() {
          const palabra = document.getElementById("palabra").value.trim().toLowerCase();
  
          if (palabra) {
              // Expresión regular para vocales
              const vocales = palabra.match(/[aeiouáéíóú]/gi);
              const cantidadVocales = vocales ? vocales.length : 0;
              document.getElementById("result").textContent = `La palabra contiene ${cantidadVocales} vocal${cantidadVocales === 1 ? '' : 'es'}.`;
          } else {
              document.getElementById("result").textContent = "Por favor, ingresa una palabra.";
          }
          }

          //Contar letras del alfabeto
          function contarLetras() {
            const palabra = document.getElementById("palabra").value.trim();
    
            if (palabra) {
                // Filtrar solo las letras del alfabeto (a-z, A-Z)
                const letras = palabra.match(/[a-zA-ZáéíóúñÁÉÍÓÚÑ]/g);
                const cantidadLetras = letras ? letras.length : 0;
                document.getElementById("result").textContent = `La palabra contiene ${cantidadLetras} letra${cantidadLetras === 1 ? '' : 's'} del alfabeto.`;
            } else {
                document.getElementById("result").textContent = "Por favor, ingresa una palabra.";
            }
            }

            //Contar los digitos de una frase
            function contarDigitos() {
              const frase = document.getElementById("frase").value.trim();
      
              if (frase) {
                  // Expresión regular para encontrar dígitos
                  const digitos = frase.match(/\d/g);
                  const cantidadDigitos = digitos ? digitos.length : 0;
                  document.getElementById("result").textContent = `La frase contiene ${cantidadDigitos} dígito${cantidadDigitos === 1 ? '' : 's'}.`;
              } else {
                  document.getElementById("result").textContent = "Por favor, ingresa una frase.";
              }
              }

              //Contar los signos de puntuacion
              function contarSignos() {
                const palabra = document.getElementById("palabra").value.trim();
    
                if (palabra) {
                    // Expresión regular para signos de puntuación
                    const signos = palabra.match(/[.,;:!?"'()¿¡]/g);
                    const cantidadSignos = signos ? signos.length : 0;
                    document.getElementById("result").textContent = `La palabra contiene ${cantidadSignos} signo${cantidadSignos === 1 ? '' : 's'} de puntuación.`;
                } else {
                    document.getElementById("result").textContent = "Por favor, ingresa una palabra o frase.";
                }
                }

                //Contar palabra en una frase
                function contarPalabras() {
                  const frase = document.getElementById("frase").value.trim();
          
                  if (frase) {
                      // Dividir la frase por espacios y filtrar elementos vacíos
                      const palabras = frase.split(/\s+/).filter(Boolean);
                      const cantidadPalabras = palabras.length;
                      document.getElementById("result").textContent = `La frase contiene ${cantidadPalabras} palabra${cantidadPalabras === 1 ? '' : 's'}.`;
                  } else {
                      document.getElementById("result").textContent = "Por favor, ingresa una frase.";
                  }
                  }