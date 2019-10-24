function calcular() {
  var mensajeError = new String();
  var caja = document.getElementById("box");
  var numeros = caja.value;

  if (numeros == "") {
    mensajeError = "No has introducido ningún dígito";
  } else {
    var regex = /^((\d+[+\-*/]{1})?)+\d+$/;
    //1. ^   -- inicio de la línea
    //2. \d+ -- cualquier número entero NO NEGATIVO, de uno o más dígitos.
    //3. [+\-*/]{1} -- seguido de un operador como MÁXIMO (escapamos el -).
    //4. (\d+[+\-*/]{1})? -- Los dos puntos anteriores forman un grupo OPTATIVO. (2+)
    //5. ((\d+[+\-*/]{1})?)+ -- y al mismo tiempo forman otro grupo para indicarle que el patrón anterior se puede REPETIR (2+2+2)
    //6. \d+$/ -- finalizamos con un dígito OBLIGATORIO (2). Si solo se introduce un dígito, será este patrón el que lo validará,
    // ya que el primer dígito forma parte de un grupo y va unido al operador.

    //Válido: 2
    //        2+2
    //        2+2+2..
    //        22
    //        22+22..

    //Inválido: +2
    //          2+
    //          2+2+
    //          2++2
    //          2++

    var resultado = numeros.match(regex);
    if (resultado == null) {
      mensajeError = "Operación inválida";
      reset(); //borramos la pantalla
    } else {
      var total = eval(numeros);
      caja.value = total;
    }
  }
  document.getElementById("errors").innerHTML = mensajeError;
}
function reset() { //borra la pantalla si no se introduce nada o existe un error.
  document.getElementById("box").value = "";
}
