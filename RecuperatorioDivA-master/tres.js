/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let seguir;
	let sexo;
	let lugar;
	let temporada;
	let cantidadPersonas;
	let contadorBariloche = 0;
	let contadorSalta = 0;
	let contadorCataratas = 0;
	let cantidadPersonasPorViaje = 0;
	let lugarMasElegido;
	let sexoTitularMasPasajeros;
	let titularPasajerosFlag = 0;
	let cantidadMasPersonas = 0;
	let contadorInvierno = 0;
	let promedio = 0;

	do {
		sexo = prompt("Ingrese género: f o m");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Sexo invalido. Ingrese género: f o m");
		}

		lugar = prompt("Ingrese lugar: Bariloche, Cataratas o Salta");
		while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")) {
			lugar = prompt("Lugar incorrecto. Ingrese lugar: Bariloche, Cataratas o Salta");
		}

		temporada = prompt("Ingrese temporada: Otoño, Invierno, Verano, Primavera");
		while (!(temporada == "otoño" || temporada == "verano" || temporada == "invierno" || temporada == "primavera")) {
			temporada = prompt("Temporada incorrecto. Ingrese temporada: Otoño, Invierno, Verano, Primavera");
		}

		cantidadPersonas = parseInt(prompt("Ingrese cantidad de personas"));
		while (cantidadPersonas < 0 || isNaN(cantidadPersonas)) {
			cantidadPersonas = parseInt(prompt("Ingrese cantidad de personas"));
		}

		if (lugar == "bariloche") {
			contadorBariloche++;
		}
		else if (lugar == "cataratas") {
			contadorCataratas++;
		}
		else {
			contadorSalta++;
		}

		if (titularPasajerosFlag = 0 || cantidadPersonas > cantidadMasPersonas) {
			cantidadMasPersonas = cantidadPersonas;
			sexoTitularMasPasajeros = sexo;
			titularPasajerosFlag = 1;

		}


		if (temporada == "invierno") {
			cantidadPersonasPorViaje += cantidadPersonas;
			contadorInvierno++;
		}

		seguir = prompt("Desea continuar?");
	} while (seguir == "s");

	promedio = cantidadPersonasPorViaje / contadorInvierno;


	if (contadorBariloche > contadorCataratas || contadorBariloche > contadorSalta) {
		lugarMasElegido = "bariloche";
	}
	else if (contadorSalta >= contadorBariloche || contadorCataratas >= contadorCataratas) {
		lugarMasElegido = "salta"
	}
	else {
		lugarMasElegido = "cataratas";
	}

	console.log("A- El lugar mas elegido es: " + lugarMasElegido);
	console.log("B- El sexo del titular que lleva mas pasajeros es: " + sexoTitularMasPasajeros);
	console.log("C- El promedio de personas por viaje en invierno es: " + promedio);
}
