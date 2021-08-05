
function mostrar()
{
	let nombre;
	let edad;
	let vacuna;
	let dosis;
	let sexo;
	let acumedad = 0;
	let contavachina = 0;
	let flaghj = 1;
	let nombrehj;
	let edadhj;
	let vacunahj;
	let totalamericana = 0;
	let contmenedad = 0;
	let contotalvac = 0;
	let contpdosis = 0;
	let contotalrusa = 0;
	let promedadchina;
	let porcenamericana;
	let porcendosis;
	let seguir; 	



	do{
		nombre = prompt("Ingrese nombre de la persona: ").toLowerCase();
		while(nombre.length < 2 ){
			nombre = prompt("Ingrese nombre de la persona: ");
		}

		edad = parseInt(prompt("Ingrese edad: "));
		while(isNaN(edad) || edad <= 12){
			edad = parseInt(prompt("Error! Ingrese edad mayor o igual a 12: "));
		}

		vacuna = prompt("Ingrese vacuna (rusa/china/americana): ").toLowerCase();
		while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana"){
			vacuna = prompt("Error! Ingrese vacuna (rusa/china/americana): ").toLowerCase();
		}

		if((vacuna == "rusa" || vacuna == "china") && (edad >= 12 && edad <= 17)){
			alert("Le corresponde vacuna americana");
			vacuna = "americana";
		}

		dosis = prompt("Ingrese (p) en caso de primera dosis o (s) en caso de segunda dosis: ").toLowerCase();
		while(dosis != "p" && dosis != "s"){
			dosis = prompt("Error! Ingrese (p) en caso de primera dosis o (s) en caso de segunda dosis: ").toLowerCase();
		}

		sexo = prompt("Ingrese sexo (f) para femenino o (m) para masculino: ").toLowerCase();
		while(sexo != "f" && sexo != "m"){
			sexo = prompt("Error! Ingrese sexo (f) para femenino o (m) para masculino: ").toLowerCase();
		}

		if(vacuna == "china"){
			acumedad += edad;
			contavachina ++;
		}

		if((sexo == "m" && edad < edadhj) || flaghj ){
			nombrehj = nombre;
			vacunahj = vacuna;
			flaghj = 0
			edadhj = edad;
		}

		if(vacuna == "americana"){
			totalamericana ++;
			if(edad < 18){
				contmenedad ++;
			}
		}

		if(vacuna == "rusa"){
			contotalrusa ++;
		}

		if(dosis == "p"){
			contpdosis ++;
		}

		contotalvac ++;

		seguir = prompt("Quiere ingresar otra persona (si/no): ");
		while(seguir != "si" && seguir != "no"){
			seguir = prompt("Error! Ingrese (si/no): ");
		}
	}while(seguir == "si");

	promedadchina = acumedad / contavachina;
	alert("Promedio de edad de los que se vacunaron con la china: "+ "\t" + promedadchina);

	alert("Nombre del hombre mas joven: " + "\t" + nombrehj + "\nVacuna: " + vacunahj + "\nEdad: " + edadhj);

	porcenamericana = (contmenedad/totalamericana)*100;

	alert("El "+ porcenamericana +" % "+" que recibio vacuna americana son menores de edad");

	porcendosis = (contpdosis/contotalvac)*100;
	alert("El " + porcendosis + " % " + " se vacuno solo con la primera dosis");

	if(totalamericana > contotalrusa && totalamericana > contavachina){
		alert("La vacuna mas inoculada fue la americana");
	}
	else if(contotalrusa > totalamericana && contotalrusa > contavachina){
		alert("La vacuna mas inoculada fue la rusa");
	}
	else if(contavachina > totalamericana && contavachina > contotalrusa){
		alert("La vacuna mas inoculada fue la china");
	}
	else if(totalamericana == contavachina){
		alert("Las vacunas mas inoculadas fueron la americana y la china ");
	}
	else if(totalamericana == contotalrusa){
		alert("Las vacunas mas inoculadas fueron la americana y la rusa ");
	}
	else if(contavachina == contotalrusa){
		alert("Las vacunas mas inoculadas fueron la china y la rusa ");
	}

}
