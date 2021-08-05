function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let contpositivos = 0;
    let contneg = 0;
    let contalfa = 0;
    let contbeta = 0;
    let contdelta = 0;
    let edadargmenor;
    let flagmenarg = 1;
    let contextran = 0;
    let porcenpositivos;
    let porcenegativos;
    let i;

    for(i = 0; i < 8; i++){

        nacionalidad = prompt("Ingrese nacionalidad de la persona (argentina/extranjera): ").toLowerCase();
		while(nacionalidad != "argentina" && nacionalidad != "extranjera" ){
			nacionalidad = prompt("Error! Ingrese (argentina/extranjera): ").toLowerCase();    
		}

        resultado = prompt("Ingrese resultado (positivo/negativo): ").toLowerCase();
		while(resultado != "positivo" && resultado != "negativo" ){
			resultado = prompt("Error! Ingrese (positivo/negativo): ").toLowerCase();    
		}

        edad = parseInt(prompt("Ingrese edad: "));
		while(isNaN(edad) || edad < 18 || edad > 65){
			edad = parseInt(prompt("Error! Ingrese edad entre 18 y 65: "));
		}

        if(resultado == "positivo"){
            cepa = prompt("Ingrese cepa (alfa/beta/delta): ").toLowerCase();
		        while(cepa != "alfa" && cepa != "beta" && cepa != "delta"){
			        vacuna = prompt("Error! Ingrese cepa (alfa/beta/delta): ").toLowerCase();
		        }
            contpositivos ++;

            if((nacionalidad == "argentina" && edad < edadargmenor) || flagmenarg){
                edadargmenor = edad;
                flagmenarg = 0;
            }
        }
        else{
            cepa = "ninguna";
            contneg ++;
        }

        if(cepa == "alfa"){
            contalfa ++;
        }else if(cepa == "beta"){
            contbeta ++;
        }else if(cepa == "delta"){
            contdelta ++;
            if(nacionalidad == "extranjera"){
                contextran ++;
            }

        }

       
    }

    porcenpositivos = (contpositivos/8)*100;
    alert("Porcentaje de positivos: " + porcenpositivos+"%");

    porcenegativos = (contneg/8)*100;
    alert("Porcentaje de negativos: " + porcenegativos+"%");

    if(contalfa > contbeta  && contalfa > contdelta){
        alert("La cepa mas encontrada fue la alfa");
    }
    else if(contbeta > contdelta && contbeta > contalfa){
        alert("La cepa mas encontrada fue la beta");
    }
    else if(contdelta > contalfa && contdelta > contbeta){
        alert("La cepa mas encontrada fue la delta");
    }
    else if(contalfa == contbeta){
        alert("Las cepas mas encontradas fueron la alfa y la beta ");
    }
    else if(contalfa == contdelta){
        alert("Las cepas mas encontradas fueron la alfa y la delta ");
    }
    else if(contdelta == contbeta){
        alert("Las cepas mas encontradas fueron la delta y la beta ");
    }

    alert("Menor edad del argentino contagiado: " + edadargmenor);

    alert("Cantidad de personas contagiadas con la delta: " + contextran);



}
