/*entre 5 y 10*/


function mostrar()
{

let origen;
let cantidad;
let costo;
let flagcant = 1;
let menorcantidad;
let origenmencant;
let contvuelos = 0;
let acumvacunas = 0;
let acumtotalgastos = 0;
let seguir;
let total25;
let total15;
let descuento;

do{

	origen = prompt("Ingrese origen del vuelo (oriente/occidente/secreto): ").toLowerCase();
	while(origen != "oriente" && origen != "occidente" && origen != "secreto"){
		origen = prompt("Ingrese origen del vuelo (oriente/occidente/secreto): ").toLowerCase();
	}

	cantidad = parseInt(prompt("Ingrese cantidad de vacunas: "));
	while(isNaN(cantidad) || cantidad < 500000 || cantidad > 2500000){
		cantidad = parseInt(prompt("Error! Ingrese valor entre 500000 y 2500000: "));
	}
	
	costo =	parseFloat(prompt("Ingrese costo del vuelo: "));
		while(isNaN(costo) || costo < 1000000 || costo > 5000000){
			costo =	parseFloat(prompt("Error! Ingrese valor entre 1 millon y 5 millones: "));
		}
	
	if(flagcant || cantidad < menorcantidad){
		menorcantidad = cantidad;
		flagcant = 0;
		origenmencant = origen;
	}

	if(origen == "occidente"){
		acumvacunas += cantidad;
		contvuelos ++;
	}

	acumtotalgastos += costo;
	
	seguir = prompt("Quiere registrar otro vuelo (si/no): ").toLowerCase();
	while(seguir != "si" && seguir != "no"){
		seguir = prompt("Error! Ingrese si o no: ").toLowerCase();
	}


}while(seguir == "si");

alert("Origen que envio menor cantidad de vacunas: " + origenmencant);

promevuelo = acumvacunas/contvuelos;

alert("Promedio por vuelo de vacunas llegadas de occidente: " + promevuelo);

alert("Total a pagar sin descuento: "+ acumtotalgastos);

if(cantidad > 10000000){
	descuento = acumtotalgastos*.25;
	total25 = acumtotalgastos - descuento;
	alert("Hubo descuento de 25 %. Importe final con descuento: " + total25);
}else if(cantidad >= 5000000){
	descuento = acumtotalgastos*.15;
	total15 = acumtotalgastos - descuento;
	alert("Hubo descuento de 15%. Importe final con descuento: " + total15);
}else{
	alert("No hubo descuento. Total a pagar: " + acumtotalgastos);
}

}
