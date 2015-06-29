$(document).ready(function(){

	var aleatorio1 = Math.round(Math.random()*20);
	var aleatorio2 = Math.round(Math.random()*20);
	var resultado = aleatorio1 + aleatorio2;
	for(i=0; i<aleatorio1; i++){
		$("#panel_op1").prepend('<img class="icon_operador" src="../../img/iconos/icon_auto.png"/>');
	}

	for(i=0; i<aleatorio2; i++){
		$("#panel_op2").prepend('<img class="icon_operador" src="../../img/iconos/icon_auto.png"/>');
	}

	$("#badge_op1").html(aleatorio1);
	$("#badge_op2").html(aleatorio2);


	$("#opcion_1").html(resultado);

});

