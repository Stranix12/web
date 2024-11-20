function verificarRespuestas() {
    // Pregunta 1
    const respuesta1 = document.querySelector('input[name="respuesta1"]:checked');
    const mensaje1 = document.getElementById('mensaje1');
    if (respuesta1) {
      if (respuesta1.value === '8') {
        mensaje1.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
      } else {
        mensaje1.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es A.</p>';
      }
    } else {
      mensaje1.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
    }

    // Pregunta 2
    const respuesta2 = document.querySelector('input[name="respuesta2"]:checked');
    const mensaje2 = document.getElementById('mensaje2');
    if (respuesta2) {
      if (respuesta2.value === 'c') {
        mensaje2.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
      } else {
        mensaje2.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es c.</p>';
      }
    } else {
      mensaje2.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
    }

    // Pregunta 3
    const respuesta3 = document.querySelector('input[name="respuesta3"]:checked');
    const mensaje3 = document.getElementById('mensaje3');
    if (respuesta3) {
      if (respuesta3.value === 'c') {
        mensaje3.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
      } else {
        mensaje3.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es c.</p>';
      }
    } else {
      mensaje3.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
    }


    // Pregunta 4
const respuesta4 = document.querySelector('input[name="respuesta4"]:checked');
const mensaje4 = document.getElementById('mensaje4');
if (respuesta4) {
if (respuesta4.value === 'a') {
  mensaje4.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje4.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje4.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 5
const respuesta5 = document.querySelector('input[name="respuesta5"]:checked');
const mensaje5 = document.getElementById('mensaje5');
if (respuesta5) {
if (respuesta5.value === 'c') {
  mensaje5.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje5.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el c.</p>';
}
} else {
mensaje5.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 6
const respuesta6 = document.querySelector('input[name="respuesta6"]:checked');
const mensaje6 = document.getElementById('mensaje6');
if (respuesta6) {
if (respuesta6.value === 'c') {
  mensaje6.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje6.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el c.</p>';
}
} else {
mensaje6.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 7
const respuesta7 = document.querySelector('input[name="respuesta7"]:checked');
const mensaje7 = document.getElementById('mensaje7');
if (respuesta7) {
if (respuesta7.value === 'a') {
  mensaje7.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje7.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje7.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 8
const respuesta8 = document.querySelector('input[name="respuesta8"]:checked');
const mensaje8 = document.getElementById('mensaje8');
if (respuesta8) {
if (respuesta8.value === 'b') {
  mensaje8.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje8.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el b.</p>';
}
} else {
mensaje8.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 9
const respuesta9 = document.querySelector('input[name="respuesta9"]:checked');
const mensaje9 = document.getElementById('mensaje9');
if (respuesta9) {
if (respuesta9.value === 'c') {
  mensaje9.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje9.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el valorCorrecto9.</p>';
}
} else {
mensaje9.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 10
const respuesta10 = document.querySelector('input[name="respuesta10"]:checked');
const mensaje10 = document.getElementById('mensaje10');
if (respuesta10) {
if (respuesta10.value === 'a') {
  mensaje10.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje10.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje10.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 11
const respuesta11 = document.querySelector('input[name="respuesta11"]:checked');
const mensaje11 = document.getElementById('mensaje11');
if (respuesta11) {
if (respuesta11.value === 'c') {
  mensaje11.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje11.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el c.</p>';
}
} else {
mensaje11.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 12
const respuesta12 = document.querySelector('input[name="respuesta12"]:checked');
const mensaje12 = document.getElementById('mensaje12');
if (respuesta12) {
if (respuesta12.value === 'a') {
  mensaje12.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje12.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el c.</p>';
}
} else {
mensaje12.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 13
const respuesta13 = document.querySelector('input[name="respuesta13"]:checked');
const mensaje13 = document.getElementById('mensaje13');
if (respuesta13) {
if (respuesta13.value === 'a') {
  mensaje13.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje13.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje13.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 14
const respuesta14 = document.querySelector('input[name="respuesta14"]:checked');
const mensaje14 = document.getElementById('mensaje14');
if (respuesta14) {
if (respuesta14.value === 'a') {
  mensaje14.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje14.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje14.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 15
const respuesta15 = document.querySelector('input[name="respuesta15"]:checked');
const mensaje15 = document.getElementById('mensaje15');
if (respuesta15) {
if (respuesta15.value === 'a') {
  mensaje15.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje15.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es el a.</p>';
}
} else {
mensaje15.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 16
const respuesta16 = document.querySelector('input[name="respuesta16"]:checked');
const mensaje16 = document.getElementById('mensaje16');
if (respuesta16) {
if (respuesta16.value === 'c') {
  mensaje16.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje16.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje16.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 17
const respuesta17 = document.querySelector('input[name="respuesta17"]:checked');
const mensaje17 = document.getElementById('mensaje17');
if (respuesta17) {
if (respuesta17.value === 'b') {
  mensaje17.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje17.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje17.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 18
const respuesta18 = document.querySelector('input[name="respuesta18"]:checked');
const mensaje18 = document.getElementById('mensaje18');
if (respuesta18) {
if (respuesta18.value === 'c') {
  mensaje18.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje18.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje18.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 19
const respuesta19 = document.querySelector('input[name="respuesta19"]:checked');
const mensaje19 = document.getElementById('mensaje19');
if (respuesta19) {
if (respuesta19.value === 'a') {
  mensaje19.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje19.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje19.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 20
const respuesta20 = document.querySelector('input[name="respuesta20"]:checked');
const mensaje20 = document.getElementById('mensaje20');
if (respuesta20) {
if (respuesta20.value === 'c') {
  mensaje20.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje20.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje20.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 21
const respuesta21 = document.querySelector('input[name="respuesta21"]:checked');
const mensaje21 = document.getElementById('mensaje21');
if (respuesta21) {
if (respuesta21.value === 'c') {
  mensaje21.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje21.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje21.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 22
const respuesta22 = document.querySelector('input[name="respuesta22"]:checked');
const mensaje22 = document.getElementById('mensaje22');
if (respuesta22) {
if (respuesta22.value === 'b') {
  mensaje22.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje22.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje22.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 23
const respuesta23 = document.querySelector('input[name="respuesta23"]:checked');
const mensaje23 = document.getElementById('mensaje23');
if (respuesta23) {
if (respuesta23.value === 'b') {
  mensaje23.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje23.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje23.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 24
const respuesta24 = document.querySelector('input[name="respuesta24"]:checked');
const mensaje24 = document.getElementById('mensaje24');
if (respuesta24) {
if (respuesta24.value === 'a') {
  mensaje24.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje24.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje24.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 25
const respuesta25 = document.querySelector('input[name="respuesta25"]:checked');
const mensaje25 = document.getElementById('mensaje25');
if (respuesta25) {
if (respuesta25.value === 'c') {
  mensaje25.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje25.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje25.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 26
const respuesta26 = document.querySelector('input[name="respuesta26"]:checked');
const mensaje26 = document.getElementById('mensaje26');
if (respuesta26) {
if (respuesta26.value === 'a') {
  mensaje26.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje26.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje26.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 27
const respuesta27 = document.querySelector('input[name="respuesta27"]:checked');
const mensaje27 = document.getElementById('mensaje27');
if (respuesta27) {
if (respuesta27.value === 'a') {
  mensaje27.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje27.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje27.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 28
const respuesta28 = document.querySelector('input[name="respuesta28"]:checked');
const mensaje28 = document.getElementById('mensaje28');
if (respuesta28) {
if (respuesta28.value === 'b') {
  mensaje28.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje28.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje28.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 29
const respuesta29 = document.querySelector('input[name="respuesta29"]:checked');
const mensaje29 = document.getElementById('mensaje29');
if (respuesta29) {
if (respuesta29.value === 'c') {
  mensaje29.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje29.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje29.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 30
const respuesta30 = document.querySelector('input[name="respuesta30"]:checked');
const mensaje30 = document.getElementById('mensaje30');
if (respuesta30) {
if (respuesta30.value === 'a') {
  mensaje30.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje30.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje30.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 31
const respuesta31 = document.querySelector('input[name="respuesta31"]:checked');
const mensaje31 = document.getElementById('mensaje31');
if (respuesta31) {
if (respuesta31.value === 'b') {
  mensaje31.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje31.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje31.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 32
const respuesta32 = document.querySelector('input[name="respuesta32"]:checked');
const mensaje32 = document.getElementById('mensaje32');
if (respuesta32) {
if (respuesta32.value === 'b') {
  mensaje32.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje32.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje32.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 33
const respuesta33 = document.querySelector('input[name="respuesta33"]:checked');
const mensaje33 = document.getElementById('mensaje33');
if (respuesta33) {
if (respuesta33.value === 'a') {
  mensaje33.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
  mensaje33.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje33.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 34
const respuesta34 = document.querySelector('input[name="respuesta34"]:checked');
const mensaje34 = document.getElementById('mensaje34');
if (respuesta34) {
  if (respuesta34.value === 'a') {
    mensaje34.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje34.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje34.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 35
const respuesta35 = document.querySelector('input[name="respuesta35"]:checked');
const mensaje35 = document.getElementById('mensaje35');
if (respuesta35) {
  if (respuesta35.value === 'a') {
    mensaje35.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje35.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje35.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 36
const respuesta36 = document.querySelector('input[name="respuesta36"]:checked');
const mensaje36 = document.getElementById('mensaje36');
if (respuesta36) {
  if (respuesta36.value === 'b') {
    mensaje36.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje36.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
  }
} else {
  mensaje36.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 37
const respuesta37 = document.querySelector('input[name="respuesta37"]:checked');
const mensaje37 = document.getElementById('mensaje37');
if (respuesta37) {
  if (respuesta37.value === 'b') {
    mensaje37.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje37.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
  }
} else {
  mensaje37.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 38
const respuesta38 = document.querySelector('input[name="respuesta38"]:checked');
const mensaje38 = document.getElementById('mensaje38');
if (respuesta38) {
  if (respuesta38.value === 'b') {
    mensaje38.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje38.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
  }
} else {
  mensaje38.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 39
const respuesta39 = document.querySelector('input[name="respuesta39"]:checked');
const mensaje39 = document.getElementById('mensaje39');
if (respuesta39) {
  if (respuesta39.value === 'c') {
    mensaje39.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje39.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
  }
} else {
  mensaje39.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 40
const respuesta40 = document.querySelector('input[name="respuesta40"]:checked');
const mensaje40 = document.getElementById('mensaje40');
if (respuesta40) {
  if (respuesta40.value === 'a') {
    mensaje40.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje40.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje40.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 41
const respuesta41 = document.querySelector('input[name="respuesta41"]:checked');
const mensaje41 = document.getElementById('mensaje41');
if (respuesta41) {
  if (respuesta41.value === 'a') {
    mensaje41.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje41.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje41.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 42
const respuesta42 = document.querySelector('input[name="respuesta42"]:checked');
const mensaje42 = document.getElementById('mensaje42');
if (respuesta42) {
if (respuesta42.value === 'b') {
mensaje42.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
mensaje42.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje42.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 43
const respuesta43 = document.querySelector('input[name="respuesta43"]:checked');
const mensaje43 = document.getElementById('mensaje43');
if (respuesta43) {
if (respuesta43.value === 'a') {
mensaje43.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
mensaje43.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje43.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 44
const respuesta44 = document.querySelector('input[name="respuesta44"]:checked');
const mensaje44 = document.getElementById('mensaje44');
if (respuesta44) {
if (respuesta44.value === 'c') {
mensaje44.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
mensaje44.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje44.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 45
const respuesta45 = document.querySelector('input[name="respuesta45"]:checked');
const mensaje45 = document.getElementById('mensaje45');
if (respuesta45) {
if (respuesta45.value === 'a') {
mensaje45.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
mensaje45.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje45.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 46
const respuesta46 = document.querySelector('input[name="respuesta46"]:checked');
const mensaje46 = document.getElementById('mensaje46');
if (respuesta46) {
if (respuesta46.value === 'b') {
mensaje46.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
mensaje46.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
}
} else {
mensaje46.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 47
const respuesta47 = document.querySelector('input[name="respuesta47"]:checked');
const mensaje47 = document.getElementById('mensaje47');
if (respuesta47) {
if (respuesta47.value === 'a') {
mensaje47.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
mensaje47.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje47.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 48
const respuesta48 = document.querySelector('input[name="respuesta48"]:checked');
const mensaje48 = document.getElementById('mensaje48');
if (respuesta48) {
if (respuesta48.value === 'c') {
mensaje48.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
mensaje48.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje48.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 49
const respuesta49 = document.querySelector('input[name="respuesta49"]:checked');
const mensaje49 = document.getElementById('mensaje49');
if (respuesta49) {
if (respuesta49.value === 'a') {
mensaje49.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
mensaje49.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
}
} else {
mensaje49.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 50
const respuesta50 = document.querySelector('input[name="respuesta50"]:checked');
const mensaje50 = document.getElementById('mensaje50');
if (respuesta50) {
if (respuesta50.value === 'c') {
mensaje50.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
} else {
mensaje50.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
}
} else {
mensaje50.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}


// Pregunta 51
const respuesta51 = document.querySelector('input[name="respuesta51"]:checked');
const mensaje51 = document.getElementById('mensaje51');
if (respuesta51) {
  if (respuesta51.value === 'b') {
    mensaje51.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje51.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
  }
} else {
  mensaje51.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 52
const respuesta52 = document.querySelector('input[name="respuesta52"]:checked');
const mensaje52 = document.getElementById('mensaje52');
if (respuesta52) {
  if (respuesta52.value === 'b') {
    mensaje52.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje52.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
  }
} else {
  mensaje52.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 53
const respuesta53 = document.querySelector('input[name="respuesta53"]:checked');
const mensaje53 = document.getElementById('mensaje53');
if (respuesta53) {
  if (respuesta53.value === 'b') {
    mensaje53.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje53.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
  }
} else {
  mensaje53.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 54
const respuesta54 = document.querySelector('input[name="respuesta54"]:checked');
const mensaje54 = document.getElementById('mensaje54');
if (respuesta54) {
  if (respuesta54.value === 'b') {
    mensaje54.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje54.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
  }
} else {
  mensaje54.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 55
const respuesta55 = document.querySelector('input[name="respuesta55"]:checked');
const mensaje55 = document.getElementById('mensaje55');
if (respuesta55) {
  if (respuesta55.value === 'c') {
    mensaje55.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje55.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
  }
} else {
  mensaje55.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 56
const respuesta56 = document.querySelector('input[name="respuesta56"]:checked');
const mensaje56 = document.getElementById('mensaje56');
if (respuesta56) {
  if (respuesta56.value === 'a') {
    mensaje56.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje56.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje56.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 57
const respuesta57 = document.querySelector('input[name="respuesta57"]:checked');
const mensaje57 = document.getElementById('mensaje57');
if (respuesta57) {
  if (respuesta57.value === 'a') {
    mensaje57.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje57.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje57.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 58
const respuesta58 = document.querySelector('input[name="respuesta58"]:checked');
const mensaje58 = document.getElementById('mensaje58');
if (respuesta58) {
  if (respuesta58.value === 'c') {
    mensaje58.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje58.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
  }
} else {
  mensaje58.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 59
const respuesta59 = document.querySelector('input[name="respuesta59"]:checked');
const mensaje59 = document.getElementById('mensaje59');
if (respuesta59) {
  if (respuesta59.value === 'c') {
    mensaje59.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje59.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
  }
} else {
  mensaje59.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 60
const respuesta60 = document.querySelector('input[name="respuesta60"]:checked');
const mensaje60 = document.getElementById('mensaje60');
if (respuesta60) {
  if (respuesta60.value === 'b') {
    mensaje60.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje60.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
  }
} else {
  mensaje60.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}



// Pregunta 61
const respuesta61 = document.querySelector('input[name="respuesta61"]:checked');
const mensaje61 = document.getElementById('mensaje61');
if (respuesta61) {
  if (respuesta61.value === 'a') {
    mensaje61.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje61.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje61.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 62
const respuesta62 = document.querySelector('input[name="respuesta62"]:checked');
const mensaje62 = document.getElementById('mensaje62');
if (respuesta62) {
  if (respuesta62.value === 'a') {
    mensaje62.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje62.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje62.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 63
const respuesta63 = document.querySelector('input[name="respuesta63"]:checked');
const mensaje63 = document.getElementById('mensaje63');
if (respuesta63) {
  if (respuesta63.value === 'c') {
    mensaje63.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje63.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "c".</p>';
  }
} else {
  mensaje63.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 64
const respuesta64 = document.querySelector('input[name="respuesta64"]:checked');
const mensaje64 = document.getElementById('mensaje64');
if (respuesta64) {
  if (respuesta64.value === 'a') {
    mensaje64.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje64.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje64.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 65
const respuesta65 = document.querySelector('input[name="respuesta65"]:checked');
const mensaje65 = document.getElementById('mensaje65');
if (respuesta65) {
  if (respuesta65.value === 'a') {
    mensaje65.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje65.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje65.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 66
const respuesta66 = document.querySelector('input[name="respuesta66"]:checked');
const mensaje66 = document.getElementById('mensaje66');
if (respuesta66) {
  if (respuesta66.value === 'a') {
    mensaje66.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje66.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje66.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 67
const respuesta67 = document.querySelector('input[name="respuesta67"]:checked');
const mensaje67 = document.getElementById('mensaje67');
if (respuesta67) {
  if (respuesta67.value === 'b') {
    mensaje67.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje67.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "b".</p>';
  }
} else {
  mensaje67.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 68
const respuesta68 = document.querySelector('input[name="respuesta68"]:checked');
const mensaje68 = document.getElementById('mensaje68');
if (respuesta68) {
  if (respuesta68.value === 'a') {
    mensaje68.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje68.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje68.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 69
const respuesta69 = document.querySelector('input[name="respuesta69"]:checked');
const mensaje69 = document.getElementById('mensaje69');
if (respuesta69) {
  if (respuesta69.value === 'a') {
    mensaje69.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje69.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje69.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}

// Pregunta 70
const respuesta70 = document.querySelector('input[name="respuesta70"]:checked');
const mensaje70 = document.getElementById('mensaje70');
if (respuesta70) {
  if (respuesta70.value === 'c') {
    mensaje70.innerHTML = '<p class="alert alert-success">¡Es correcto!</p>';
  } else {
    mensaje70.innerHTML = '<p class="alert alert-danger">No es correcto. La respuesta correcta es "a".</p>';
  }
} else {
  mensaje70.innerHTML = '<p class="alert alert-warning">Por favor, selecciona una respuesta.</p>';
}
  }