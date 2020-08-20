/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let acumEdad = 0;
	let promedioEdad;
	let flagHombrePeso = 0;
	let pesoHombreMasPesado = 0;
	let nombreHombreMasPesado = 0;
	let contadorMujeres = 0;

	  for(let i = 0; i < 5; i++){
			nombre = prompt("Ingrese nombre");
			while(!(isNaN(nombre))){
				nombre = prompt("Nombre invalido. Ingrese nombre");
			}

			peso = parseFloat(prompt("Ingrese peso"));
      while(peso < 0 || isNaN(peso)){
    peso = parseFloat(prompt("Peso incorrecto. Ingrese peso"));
	 }
	 
	 sexo = prompt("Ingrese género: f o m");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Sexo invalido. Ingrese género: f o m");
		}

		edad = parseInt(prompt("Ingrese edad"));
		while (isNaN(edad) || edad <= 0) {
			edad = parseInt(prompt("Edad invalida. Ingrese edad"));
		}

		 if(sexo == "f"){
        contadorMujeres++;
		 }
		 else{
			 if(flagHombrePeso == 0 && peso > pesoHombreMasPesado){
					pesoHombreMasPesado = peso;
					nombreHombreMasPesado = nombre;
			 }
		 }


       acumEdad += edad;
		}
		 promedioEdad = acumEdad / 5;
		 
		 console.log("A- La cantidad de mujeres es: " + contadorMujeres);
		 console.log("B- La edad promedio total es: " + promedioEdad + " años.");
		 console.log("C- El hombre mas pesado es: " + nombreHombreMasPesado + " y pesa: " + pesoHombreMasPesado + "kg.");
}
